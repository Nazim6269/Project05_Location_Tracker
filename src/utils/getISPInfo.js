export const getISPInfo = async () => {
 try {
     const res = await fetch("https://ipwho.is/");
  const data = await res.json();
 return {

    ip: data.ip,
    type: data.type,

    // Location
    continent: data.continent,
    continentCode: data.continent_code,
    country: data.country,
    countryCode: data.country_code,
    region: data.region,
    city: data.city,
    latitude: data.latitude,
    longitude: data.longitude,
    postal: data.postal,
    callingCode: data.calling_code,
    capital: data.capital,
    borders: data.borders,

    // Flag
    flag:data.flag?.emoji,
    

    // Network / ISP Info
    connection: {
      asn: data.connection?.asn,
      org: data.connection?.org,
      isp: data.connection?.isp,
      domain: data.connection?.domain,
    },
  };
 } catch (error) {
    console.log(error)
 }
 
};
