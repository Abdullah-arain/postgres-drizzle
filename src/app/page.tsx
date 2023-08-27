import { countries } from "@/db/schema/country";
import { users } from "@/db/schema/user";
import { db } from "@/lib/drizzle";

// const insertCountry = async () => {
//   return await db.insert(countries).values({ name: "india" }).returning();
// };

const insertUser = async (values: any) => {
  return await db.insert(users).values( values ).returning();
};

export default async function Cart(): Promise<JSX.Element> {
  // const country = await insertCountry();
  // console.log(country);

  const insertData = await insertUser({
    fullName: "abdullah",
    phone: "123"
  })
  console.log(insertData)
  const countriesData = await db.select().from(countries);
  // console.log(countriesData);
  const userData = await db.select().from(users);
  // console.log(userData);
  return (
    <div>
      <h1>Country data</h1>
      <div>
        {countriesData.map((row) => (
          <div key={row.id}>
            {row.id}
            {row.name}
          </div>
        ))}
      </div>
      <h1>user data</h1>
      <div>
        {insertData.map((row) => (
          <div key={row.id}>
            {row.id}
            {row.fullName}
          </div>
        ))}
      </div>
    </div>
  );
}
