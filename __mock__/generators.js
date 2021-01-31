import project from './project'
import article from './article'
import user from './user'
import role from './role'
import ticket from './ticket'
import category from './category'

export function generator(number, essence) {
  return new Array(number).fill(essence).map((item, index) => ({
    ...item,
    id: index
  }))
}

export function generateProjects(number) {
  return generator(number, project)
}

export function generateArticles(number) {
  return generator(number, article)
}

export function generateUsers(number) {
  return generator(number, user)
}

export function generateRoles(number) {
  return generator(number, role)
}

export function generateTickets(number) {
  return generator(number, ticket)
}

export function generateCategories(number) {
  return generator(number, category)
}
