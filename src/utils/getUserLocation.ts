const getUserLocation = async (): Promise<string> => {
  try {
    console.log("🔍 IPINFO TOKEN:", process.env.NEXT_PUBLIC_IPINFO_TOKEN); // Debugging log

    const res = await fetch(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPINFO_TOKEN}`);
    if (!res.ok) throw new Error("Failed to fetch location");

    const data = await res.json();
    console.log("🌍 Location data:", data); // Debugging log
    return data?.country || "Unknown";
  } catch (error) {
    console.error("🔥 Location fetch error:", error);
    return "Unknown";
  }
};

export default getUserLocation;
