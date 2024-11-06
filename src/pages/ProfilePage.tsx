import React, { useState } from "react";
import Footer from "../components/footer";

interface Profile {
  firstName: string;
  lastName: string;
  name: string;
  location: string;
  state: string;
  birthdate: string;
  favoriteCharacter: string;
  favoriteRide: string;
  favoriteMovie: string;
  favoriteDisneyland: string;
  lastUpdated: string;
}

const states = ["CA", "NY", "TX", "FL", "IL", "GA", "PA", "AZ"];

const ProfilePage: React.FC = () => {
  const defaultProfile: Profile = {
    firstName: "John",
    lastName: "Smith",
    name: "John Smith",
    location: "San Francisco",
    state: "CA",
    birthdate: "01/01/1980",
    favoriteCharacter: "Elsa",
    favoriteRide: "Space Mountain",
    favoriteMovie: "Moana",
    favoriteDisneyland: "Disney World, Florida",
    lastUpdated: "May 20th, 2024",
  };

  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [originalProfile, setOriginalProfile] =
    useState<Profile>(defaultProfile);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof Profile
  ) => {
    setProfile({ ...profile, [field]: e.target.value });
  };

  const getCurrentDateFormatted = () => {
    const date = new Date();
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const toggleEdit = () => {
    if (isEditing) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        name: `${profile.firstName} ${profile.lastName}`,
        lastUpdated: getCurrentDateFormatted(),
      }));
    } else {
      setOriginalProfile(profile); // Save current state before editing
    }
    setIsEditing(!isEditing);
  };

  const cancelEdit = () => {
    setProfile(originalProfile); // Revert to original profile state
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-gray-100 p-20 w-full">
        {isEditing ? (
          <div className="flex space-x-4 mb-4">
            <div>
              <label className="block mb-1 font-semibold text-[#5B6873] text-base">
                First Name <span className="text-[#FF0004]">*</span>
              </label>
              <input
                type="text"
                value={profile.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
                className="border-gray-300 p-2 border rounded w-[320px] h-[40px]"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-[#5B6873] text-base">
                Last Name <span className="text-[#FF0004]">*</span>
              </label>
              <input
                type="text"
                value={profile.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
                className="border-gray-300 p-2 border rounded w-[320px] h-[40px]"
                required
              />
            </div>
          </div>
        ) : (
          <h1 className="mb-[8px] font-bold text-4xl">{profile.name}</h1>
        )}

        {!isEditing && (
          <p className="mb-[32px] text-xs">
            Last Updated: {profile.lastUpdated}
          </p>
        )}

        <div className="mb-4">
          <label
            className={`inline mb-1 font-semibold text-[15px] ${
              isEditing ? "text-[#5B6873]" : ""
            }`}
          >
            {isEditing ? (
              <>
                Birth Date <span className="text-[#FF0004]">*</span>
              </>
            ) : (
              "Age:"
            )}
          </label>
          {isEditing ? (
            <input
              type="text"
              value={profile.birthdate}
              onChange={(e) => handleInputChange(e, "birthdate")}
              className="block border-gray-300 p-2 border rounded w-[320px] h-[40px]"
              required
            />
          ) : (
            <p className="inline font-semibold text-[15px]"> 26</p>
          )}
        </div>

        <div className="flex space-x-4 mb-4">
          <div>
            <label
              className={`mb-1 font-semibold text-[15px] ${
                isEditing ? "text-[#5B6873] block" : "inline"
              }`}
            >
              City:
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.location}
                onChange={(e) => handleInputChange(e, "location")}
                className="block border-gray-300 p-2 border rounded w-[320px] h-[40px]"
              />
            ) : (
              <p className="inline mb-1 font-semibold text-base">
                {" "}
                {`${profile.location}, ${profile.state}`}
              </p>
            )}
          </div>
          {isEditing && (
            <div>
              <label
                className={`block mb-1 font-semibold text-[15px] ${
                  isEditing ? "text-[#5B6873]" : ""
                }`}
              >
                State
              </label>
              <select
                value={profile.state}
                onChange={(e) => handleInputChange(e, "state")}
                className="block border-gray-300 p-2 border rounded w-[105px] h-[40px]"
              >
                {states.map((abbreviation) => (
                  <option key={abbreviation} value={abbreviation}>
                    {abbreviation}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {[
          {
            label: "Favorite Disney Character",
            value: profile.favoriteCharacter,
            field: "favoriteCharacter",
          },
          {
            label: "Favorite Disney Ride",
            value: profile.favoriteRide,
            field: "favoriteRide",
          },
          {
            label: "Favorite Disney Movie",
            value: profile.favoriteMovie,
            field: "favoriteMovie",
          },
          {
            label: "Favorite Disneyland",
            value: profile.favoriteDisneyland,
            field: "favoriteDisneyland",
          },
        ].map((item) => (
          <div className="mb-4" key={item.field}>
            <span
              className={`mb-1 font-semibold text-[15px] ${
                isEditing ? "text-[#5B6873] block" : "inline"
              }`}
            >
              {isEditing ? item.label : `${item.label}:`}
            </span>
            {isEditing ? (
              <input
                type="text"
                value={item.value}
                onChange={(e) =>
                  handleInputChange(e, item.field as keyof Profile)
                }
                className={`border-gray-300 p-2 border rounded h-[40px] ${
                  item.value === "Favorite Disneyland"
                    ? "w-[656px]"
                    : "w-[320px]"
                } `}
              />
            ) : (
              <p className="inline ml-2 font-semibold text-base">
                {item.value}
              </p>
            )}
          </div>
        ))}

        <div className="flex space-x-4 mt-6">
          <button
            onClick={toggleEdit}
            className="bg-[#054553] hover:bg-teal-700 drop-shadow-lg px-6 py-3 rounded-lg w-[126px] h-[48px] font-semibold text-sm text-white"
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
          {isEditing && (
            <button
              onClick={cancelEdit}
              className="border-[#054553] bg-[#F1F2F3] drop-shadow-lg px-6 py-3 border rounded-lg w-[126px] h-[48px] font-semibold text-[#054553] text-sm text-white"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
