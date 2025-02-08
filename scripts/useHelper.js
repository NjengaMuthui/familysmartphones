function filename(name) {
  /*let port = window.location.port === "" ? "" : `:${window.location.port}`;
  return `${window.location.protocol}//${window.location.hostname}${port}*/
  return `/images/${name}`;
}
function getURL() {
  return "https://mipfcdfcjkaldjmepjwm.supabase.co";
}
function getKEY() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pcGZjZGZjamthbGRqbWVwandtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMDc0NzQsImV4cCI6MjA1MjY4MzQ3NH0.XkPGCjiPfwZpNY1vKuDuNKnFYBdwBi2Mckedl8VvOjo";
}
function formatNumberWithCommas(number) {
  return number.toLocaleString();
}
const screenSize = {
  title: "Screen Size",
  items: [
    { name: "5.5 inches or smaller", isSelected: false },
    { name: "5.6 to 6.0 inches", isSelected: false },
    { name: "6.1 to 6.5 inches", isSelected: false },
    { name: "6.6 inches or larger", isSelected: false }
  ],
  single: true
};
const ramSize = {
  title: "RAM",
  items: [
    { name: "3GB or lower", isSelected: false },
    { name: "4GB", isSelected: false },
    { name: "6GB", isSelected: false },
    { name: "8GB", isSelected: false },
    { name: "12GB", isSelected: false },
    { name: "16GB or higher", isSelected: false }
  ],
  single: true
};

const storage = {
  title: "Storage",
  items: [
    { name: "32GB or lower", isSelected: false },
    { name: "64GB", isSelected: false },
    { name: "128GB", isSelected: false },
    { name: "256GB", isSelected: false },
    { name: "512GB", isSelected: false },
    { name: "1TB or higher", isSelected: false }
  ],
  single: true
};

const batteryCapacity = {
  title: "Battery Capacity",
  items: [
    { name: "3000mAh or smaller", isSelected: false },
    { name: "3001mAh to 4000mAh", isSelected: false },
    { name: "4001mAh to 5000mAh", isSelected: false },
    { name: "5001mAh or larger", isSelected: false }
  ],
  single: true
};

const camera = {
  title: "Rear Camera Resolution",
  items: [
    { name: "12MP or lower", isSelected: false },
    { name: "13MP to 48MP", isSelected: false },
    { name: "49MP to 108MP", isSelected: false },
    { name: "108MP or higher", isSelected: false }
  ],
  single: true
};
function setfilters(query, screen, ram, str, battery, cam) {
  switch (screen) {
    case screenSize.items[0].name:
      query.lte("screen", 5.5);
      break;
    case screenSize.items[1].name:
      query.gte("screen", 5.6).lte("screen", 6.0);
      break;
    case screenSize.items[2].name:
      query.gte("screen", 6.1).lte("screen", 6.5);
      break;
    case screenSize.items[3].name:
      query.gte(6.6);
      break;
  }
  switch (ram) {
    case ramSize.items[0].name:
      query.lte("memory_internal", 3);
      break;
    case ramSize.items[1].name:
      query.eq("memory_internal", 4);
      break;
    case ramSize.items[2].name:
      query.eq("memory_internal", 6);
      break;
    case ramSize.items[3].name:
      query.eq("memory_internal", 8);
      break;
    case ramSize.items[4].name:
      query.eq("memory_internal", 12);
      break;
    case ramSize.items[5].name:
      query.gte("memory_internal", 16);
      break;
  }
  switch (str) {
    case storage.items[0].name:
      query.lte("memory_external", 32);
      break;
    case storage.items[1].name:
      query.eq("memory_external", 64);
      break;
    case storage.items[2].name:
      query.eq("memory_external", 128);
      break;
    case storage.items[3].name:
      query.eq("memory_external", 256);
      break;
    case storage.items[4].name:
      query.eq("memory_external", 512);
      break;
    case storage.items[5].name:
      query.gte("memory_external", 1024);
      break;
  }
  switch (battery) {
    case batteryCapacity.items[0].name:
      query.lte("battery_type", 3000);
      break;
    case batteryCapacity.items[1].name:
      query.gte("battery_type", 3001).lte("battery_type", 4000);
      break;
    case batteryCapacity.items[2].name:
      query.gte("battery_type", 4001).lte("battery_type", 5000);
      break;
    case batteryCapacity.items[3].name:
      query.gte("battery_type", 5001);
      break;
  }
  switch (cam) {
    case camera.items[0].name:
      query.lte("rear_Camera", 12);
      break;
    case camera.items[1].name:
      query.gte("rear_Camera", 13).lte("rear_Camera", 48);
      break;
    case camera.items[2].name:
      query.gte("rear_Camera", 49).lte("rear_Camera", 108);
      break;
    case camera.items[3].name:
      query.gte("rear_Camera", 108);
      break;
  }
  return query;
}
export {
  filename,
  formatNumberWithCommas,
  screenSize,
  ramSize,
  storage,
  batteryCapacity,
  camera,
  getKEY,
  getURL
};
