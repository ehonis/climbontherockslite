import Image from 'next/image';

export default async function UserAvatar({ userAvatar }) {
  console.log(userAvatar);
  if (!userAvatar)
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </>
    );

  return (
    <div>
      <Image
        src={userAvatar}
        alt="User Avatar"
        height={50}
        width={50}
        className="size-9 rounded-full"
      />
    </div>
  );
}
