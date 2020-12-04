select "name",
       count(*) as "moviesPerCategory"

  from "categories"

  join "filmCategory" using ("categoryId")

  join "castMembers" using ("filmId")

  join "actors" using ("actorId")

  where "firstName" = 'Lisa'

  group by "categoryId";
