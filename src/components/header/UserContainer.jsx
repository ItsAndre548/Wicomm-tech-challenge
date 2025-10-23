export default function UserContainer({ userIcon }) {
  return (
    <div className="userContainer">
      <button>
        <img src={userIcon} alt="user-Icon" width={18} height={18} />
      </button>
    </div>
  );
}
