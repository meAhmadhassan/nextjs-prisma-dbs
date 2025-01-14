import { db } from "@/lib/db";

export default async function Home() {
  const tasks = await db.task.findMany();
 
  // // filtered tasks 
  // const tasks = await db.task.findMany({
  //   where: {
  //     title: { contains : "task" }
  //   }
  // })

  return (
    <div>
      <h2 className="text-center mt-20">Home Page</h2>
      <p>Tasks List</p>
      {tasks.map((task) => (
        <div key={task.id}>{task.id} - {task.title}</div>
      ))}
    </div>    
  );
}
