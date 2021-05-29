import C from '../types/root'

export function setMutate(mutation, variables, callback) {
  return {
    type: C.SET_MUTATE,
    payload: {
      mutation,
      variables,
      callback
    }
  }
}

export function setSettings(settings) {
  return {
    type: C.SET_SETTINGS,
    payload: {
      settings
    }
  }
}

export function setProjectMembers(members) {
  return {
    type: C.SET_MEMBERS,
    payload: {
      members
    }
  }
}

export function setProjectScreenshots(screenshots) {
  return {
    type: C.SET_SCREENSHOTS,
    payload: {
      screenshots
    }
  }
}

export function setProjectFiles(files) {
  return {
    type: C.SET_FILES,
    payload: {
      files
    }
  }
}

export function setFolder(folder) {
  return {
    type: C.SET_FOLDER,
    payload: {
      folder
    }
  }
}

export function setCompanies(companies) {
  return {
    type: C.SET_COMPANIES,
    payload: {
      companies
    }
  }
}

export function setCategories(categories) {
  return {
    type: C.SET_CATEGORIES,
    payload: {
      categories
    }
  }
}

export function setStatuses(statuses) {
  return {
    type: C.SET_STATUSES,
    payload: {
      statuses
    }
  }
}

export function setCurrentChat(chat) {
  return {
    type: C.SET_CHAT,
    payload: {
      chat
    }
  }
}

export function setSearch(search) {
  return {
    type: C.SET_SEARCH,
    payload: {
      search
    }
  }
}

export function setParams(params) {
  return {
    type: C.SET_PARAMS,
    payload: {
      params
    }
  }
}

export function setMessages(messages) {
  return {
    type: C.SET_MESSAGES,
    payload: {
      messages
    }
  }
}

export function setDisplayMethod(displayMethod) {
  return {
    type: C.SET_DISPLAY_METHOD,
    payload: {
      displayMethod
    }
  }
}

export function setVisibleFilters(visibleFilters) {
  return {
    type: C.SET_VISIBLE_FILTERS,
    payload: {
      visibleFilters
    }
  }
}

export function setCurrentPage(currentPage) {
  return {
    type: C.SET_CURRENT_PAGE,
    payload: {
      currentPage
    }
  }
}

export function addProjectMember(member) {
  return {
    type: C.ADD_MEMBER,
    payload: {
      member
    }
  }
}

export function addProjectScreenshot(screenshot) {
  return {
    type: C.ADD_SCREENSHOT,
    payload: {
      screenshot
    }
  }
}

export function addProjectFile(file) {
  return {
    type: C.ADD_FILE,
    payload: {
      file
    }
  }
}

export function removeProjectMember(email) {
  return {
    type: C.REMOVE_MEMBER,
    payload: {
      email
    }
  }
}

export function removeProjectScreenshot(id) {
  return {
    type: C.REMOVE_SCREENSHOT,
    payload: {
      id
    }
  }
}

export function removeProjectFromFolder(id) {
  return {
    type: C.REMOVE_PROJECT_FROM_FOLDER,
    payload: {
      id
    }
  }
}

export function removeProjectFile(id) {
  return {
    type: C.REMOVE_FILE,
    payload: {
      id
    }
  }
}

export function clearProjectMembers() {
  return {
    type: C.CLEAR_MEMBERS
  }
}

export function clearProjectScreenshots() {
  return {
    type: C.CLEAR_SCREENSHOTS
  }
}

export function clearProjectFiles() {
  return {
    type: C.CLEAR_FILES
  }
}
