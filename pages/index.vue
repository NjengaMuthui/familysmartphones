<template>
  <div>
    <TopSliding />
    <div class="flex-container">
      <TopLanding :Product="images[7]" class="flex-item" />
      <TopLanding :Product="images[4]" class="flex-item" />
      <MultiPurpose title="Latest Products" :prods="images" />
      <MultiPurpose title="Tecno Offers" :prods="tecnoPhones" />
      <MultiPurpose title="Apple Offers" :prods="applePhones" />
      <MultiPurpose title="Realme" :prods="realmePhones" />
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient();

const { data: images } = await useAsyncData(
  "fetchDevices",
  () =>
    client
      .from("devices")
      .select("*")
      .not("release_date", "is", null)
      .order("release_date", { ascending: false })
      .limit(10),
  {
    transform: (result) => result.data
  }
);
const { data: tecnoPhones } = await useAsyncData(
  "fetchTecno",
  () =>
    client
      .from("devices")
      .select("*")
      .ilike("name", "%tecno%")
      .order("release_date", { ascending: false })
      .limit(10),
  {
    transform: (result) => result.data
  }
);
const { data: applePhones } = await useAsyncData(
  "fetchApple",
  () =>
    client
      .from("devices")
      .select("*")
      .ilike("name", "%Apple%")
      .order("release_date", { ascending: false })
      .limit(10),
  {
    transform: (result) => result.data
  }
);
const { data: realmePhones } = await useAsyncData(
  "fetchRealme",
  () =>
    client
      .from("devices")
      .select("*")
      .ilike("name", "%realme%")
      .order("release_date", { ascending: false })
      .limit(10),
  {
    transform: (result) => result.data
  }
);
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 96%;
  margin: 20px auto;
}

.flex-item {
  flex: 1 1 calc(48% - 8px);
  max-width: calc(48% - 8px);
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }

  .flex-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
