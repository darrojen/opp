export default function ProfileSide() {
  return (
    <div className="space-y-4">
      <div className="bg-white border rounded-xl p-4">
        <h3 className="font-semibold">Your Profile</h3>
        <p className="text-sm text-gray-500">Complete your profile</p>
      </div>

      <div className="bg-white border rounded-xl p-4">
        <h3 className="font-semibold">Suggestions</h3>
        <p className="text-sm text-gray-500">
          People and projects to follow
        </p>
      </div>
    </div>
  )
}