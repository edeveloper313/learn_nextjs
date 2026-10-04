import Image from "next/image";

// User Interface
interface UserI {
  id: number;
  name: string;
  email: string;
  bio: string;
  imgUrl: string;
}

// Profile Name
type profileName = {
  params: Promise<{ name: string }>;
};

const page = async ({ params }: profileName) => {
  // Users
  const users: UserI[] = [
    {
      id: 1,
      name: "Kamran",
      email: "kamran@example.com",
      bio: "Software Developer and Team Lead",
      imgUrl:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Uzair",
      email: "uzair@example.com",
      bio: "UI/UX Designer and Creative Thinker",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Ahmed",
      email: "ahmed@example.com",
      bio: "Frontend Developer specializing in React and TypeScript",
      imgUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Hassan",
      email: "hassan@example.com",
      bio: "Backend Developer working with Node.js and databases",
      imgUrl:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Ali",
      email: "ali@example.com",
      bio: "Full Stack Developer and JavaScript Enthusiast",
      imgUrl:
        "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const profileParam = await params;
  const name = profileParam.name;
  const filteredUser = users.filter(
    (user) => user.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
  );
  const user = filteredUser[0];

  return (
    <>
      <main className="container">
        <a
          href="#"
          className="block rounded-lg p-4 shadow-xs shadow-indigo-100 w-96"
        >
          <Image
            src={user.imgUrl}
            alt={`Profile image ${user.name}`}
            width={300}
            height={300}
            className="h-56 w-full rounded-md object-top object-cover"
          />

          <div className="mt-2">
            <dl>
              <div className="flex gap-1 ">
                <h3 className="">Name:</h3>
                <p>{user.name}</p>
              </div>
            </dl>

            <div className="mt-6 flex flex-col  gap-3 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Email</p>

                  <p className="font-medium">{user.email}</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Bio</p>

                  <p className="font-medium">{user.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </main>
    </>
  );
};

export default page;
