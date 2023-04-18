type role = {
  label: string
  param: string
}

export const roles: role[] = [
  { label: 'Organització', param: 'org' },
  { label: 'Usuari', param: 'user' },
  { label: 'Admin d\'heres', param: 'admin' },
]

export const getRole = (role: string) => {
  return roles.find((r) => r.param === role)
}