select  "countries"."name" as "country",
        count(*) as "citiesPerCountry"

  from "countries"

  join "cities" using ("countryId")

  group by "countryId"

  order by "country";
