const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `http://localhost:8080/?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                method: "GET",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    if (jsonResponse.businesses.length === 0) {
                        return [];
                    }

                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipcode: business.location.zip_code,
                            phone: business.display_phone,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            url: business.url,
                        };
                    });
                }
            });
    },
};
export default Yelp;
//
