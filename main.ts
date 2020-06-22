import { PrismaClient } from "@prisma/client";

async function main() {
  const client = new PrismaClient({
    log: ["query"],
  });

  const ids = [
    "ckbqhy5r4000101mi3q2f35s3",
    "ckbqhywd2000301mi7yqdfq3u",
    "ckbqhzc3b000501mi21vw0p0z",
  ];

  const items = await Promise.all(
    ids.map((id) => client.a.findOne({ where: { id } }))
  );
  console.log(items);

  client.disconnect();
}

main();
