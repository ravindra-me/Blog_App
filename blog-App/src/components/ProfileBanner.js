import { Link } from "react-router-dom";

function ProfileBanner(props) {
  const { bio, image, username, email } = props.user;
  return (
    <section className="py-16 text-center bg-gray-900">
      <div class="container">
        <div class="font-0 text-center">
          <img src={image} alt="" className="w-32 h-32 mx-auto rounded" />
        </div>
        <h3 className="text-white text-2xl mt-4">{username}</h3>
        <h4 className="text-white text-xl mt-4">{bio}</h4>
        <div className="text-right">
          <Link
            to="/setting"
            className="text-gray-300 border py-2 px-4 rounded-xl"
          >
            Edit Profile Setting
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProfileBanner;
