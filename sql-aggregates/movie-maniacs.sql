select "firstName",
       "lastName",
       sum("payments"."amount") as "totalSpentOnRentals"

  from "customers"

  join "payments" using ("customerId")

  group by "firstName",
           "lastName"

  order by ("totalSpentOnRentals") desc;
