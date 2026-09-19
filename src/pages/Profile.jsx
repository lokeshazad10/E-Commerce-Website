import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Package, UserRound } from "lucide-react";

const Profile = () => {
  return (
    <main className="px-6 md:px-12.5 py-10 min-h-[60vh]">
      <p className="mb-8 text-(--text-gray)">
        <Link to="/">Home</Link> &gt; Profile
      </p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <p className="text-(--text-gray) mb-2">Welcome back</p>
          <h1 className="font-[PrimaryFont] text-4xl font-bold">My profile</h1>
        </div>
        <button className="self-start md:self-auto border border-black rounded-full px-6 py-2.5">Edit profile</button>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
        <aside className="rounded-2xl bg-(--bg-secondary) p-6 text-center">
          <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-black text-white flex items-center justify-center">
            <UserRound size={34} />
          </div>
          <h2 className="font-bold text-xl">Your account</h2>
          <p className="text-(--text-gray) mt-1">Manage your details and preferences</p>
        </aside>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProfileLink icon={<Package />} title="Orders" description="Track and view your orders" />
          <ProfileLink icon={<MapPin />} title="Addresses" description="Manage your delivery addresses" />
          <div className="md:col-span-2 rounded-2xl border border-[#e4e4e4] p-6">
            <p className="text-(--text-gray) text-sm mb-2">Personal information</p>
            <p className="font-bold text-lg">Guest shopper</p>
            <p className="text-(--text-gray) mt-1">Sign in to save your profile and order history.</p>
            <button className="mt-5 rounded-full bg-black text-white px-7 py-3">Sign in</button>
          </div>
        </div>
      </section>
    </main>
  );
};

const ProfileLink = ({ icon, title, description }) => (
  <button className="w-full text-left rounded-2xl border border-[#e4e4e4] p-6 flex items-center gap-4 hover:border-black transition-colors">
    <span className="w-11 h-11 rounded-full bg-(--bg-secondary) flex items-center justify-center">{icon}</span>
    <span className="flex-1">
      <span className="block font-bold text-lg">{title}</span>
      <span className="block text-(--text-gray) mt-1">{description}</span>
    </span>
    <ChevronRight size={20} />
  </button>
);

export default Profile;