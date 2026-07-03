import { useProfile } from '../../hooks/useProfile'
import { ProfileHeader } from '../../components/Profile/ProfileHeader'
import { ProfileStats } from '../../components/Profile/ProfileStats'
import { SubjectList } from '../../components/Profile/SubjectList'
import { MentorChat } from '../../components/Profile/MentorChat'

export function Profile() {
  const { profile, isLoading, setIsEditing, removeSubject, addSubject } = useProfile()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-sm text-gray-400">Cargando perfil...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 py-6 px-4 max-w-2xl mx-auto">
      <h1 className="text-lg font-medium text-gray-900">Mi perfil</h1>

      {/* Mobile: una columna / Desktop: dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        
        {/* Columna izquierda */}
        <div className="flex flex-col gap-4">
          <ProfileHeader
            profile={profile}
            onEdit={() => setIsEditing(true)}
          />
          <SubjectList
            subjects={profile.subjects}
            onAdd={addSubject}
            onRemove={removeSubject}
          />
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col gap-4">
          <ProfileStats stats={profile.stats} />
          <MentorChat userName={profile.name} />
        </div>

      </div>
    </div>
  )
}