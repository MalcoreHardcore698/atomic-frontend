  fragment UserFields on User {
    name
    about
    avatar {
      path
    }
    account
    email
    phone
    members
    company {
      name
      email
      avatar {
        path
      }
    }
    role {
      id
      name
      permissions
    }
    folders {
      id
      name
      projects
    }
    token
    gender
    register
    settings
    dateOfBirth
    updatedAt
    createdAt
  }
`,M=y.a`
  fragment UserMemberFields on User {
    name
    about
    avatar {
      id
      path
    }
    role {
      id
      name
      permissions
    }
    account
    email
  }
`,E=y.a`
  fragment UserForReset on User {
    email
    resetPasswordKey
  }
`,_=y.a`
  fragment NoticeFields on Notice {
    id
    type
    author {
      email
      avatar {
        path
      }
    }
    title
    message
    company {
      email
      avatar {
        path
      }
    }
    createdAt
  }
`,k=y.a`
  fragment ProjectFields on Project {
    id
    author {
      name
      avatar {
        path
      }
    }
    title
    body
    characteristics {
      id
      name
      value
      isVisualize
    }
    description
    company {
      name
      email
      avatar {
        path
      }
    }
    preview {
      id
      path
    }
    members {
      name
      about
      avatar {
        path
      }
      account
      email
    }
    files {
      id
      filename
      size
      path
    }
    screenshots {
      id
      filename
      size
      path
    }
    presentation
    category {
      id
      name
    }
    rating {
      email
      phone
    }
    status
    updatedAt
    createdAt
  }
`,O=y.a`
  fragment ArticleFields on Article {
    id
    author {
      name
      avatar {
        path
      }
    }
    title
    body
    preview {
      path
    }
    category {
      id
      name
    }
    status
    updatedAt
    createdAt
  }
`,j=y.a`
  fragment CategoryFields on Category {
    id
    name
    type
    description
    createdAt
  }
`,x=y.a`
  fragment MessageFields on Message {
    id
    user {
      name
      email
      avatar {
        path
      }
    }
    text
    type
    updatedAt
    createdAt
  }
`,S=y.a`
  fragment TicketMessageFields on TicketMessage {
    id
    user {
      name
      email
      avatar {
        path
      }
    }
    ticket {
      id
    }
    text
    type
    updatedAt
    createdAt
  }
`,C=y.a`
  fragment ChatFields on Chat {
    id
    type
    title
    members {
      name
      email
      avatar {
        path
      }
    }
  }
`,A=y.a`
  fragment ImageFields on Image {
    id
    path
    filename
    updatedAt
    createdAt
  }
`,I=y.a`
  fragment FileFields on File {
    id
    path
    filename
    updatedAt
    createdAt
  }
`,P=y.a`
  fragment RoleFields on Role {
    id
    name
    permissions
    createdAt
  }
`,T=y.a`
  fragment TicketFields on Ticket {
    id
    title
    author {
      name
      email
      avatar {
        path
      }
    }
    counsellor {
      name
      email
      avatar {
        path
      }
    }
    messages {
      id
      text
      user {
        name
        email
        avatar {
          path
        }
      }
      updatedAt
      createdAt
    }
    category {
      id
      name
    }
    status
    updatedAt
    createdAt
  }
`,R=y.a`
  fragment CommentFields on Comment {
    id
    author {
      name
      avatar {
        id
        path
        filename
      }
    }
    likes {
      email
      name
    }
    text
    updatedAt
    createdAt
  }
`,L=y.a`
  fragment DashboardSettingsFields on DashboardSettings {
    general {
      logotype {
        path
        size
      }
    }
    scaffold {
      title
      primary {
        id
        title
      }
      residues{
        id
        title
      }
      background {
        path
        size
      }
    }
    meta {
      title
      description
    }
  }
`,N=y.a`
  mutation googleAuth($accessToken: String!) {
    googleAuth(accessToken: $accessToken) {
      ...UserFields
    }
  }
  ${w}
`,D=y.a`
  mutation facebookAuth($accessToken: String!) {
    facebookAuth(accessToken: $accessToken) {
      ...UserFields
    }
  }
  ${w}
`,U=y.a`
  mutation checkin($login: String!) {
    checkin(login: $login)
  }
`,z=y.a`
  mutation login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      ...UserFields
    }
  }
  ${w}
`,B=y.a`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      ...UserFields
    }
  }
  ${w}
`,F=y.a`
  mutation updateUserPasswordResetStatus($email: String!) {
    updateUserPasswordResetStatus(email: $email) {
      ...UserForReset
    }
  }
  ${E}
`,V=y.a`
  query getResetTokenByEmail($email: String, $token: String) {
    ...UserForReset
  }
  ${E}
`,q=y.a`
  mutation checkTokenAndResetPassword($email: String!, $token: String!, $password: String!) {
    checkTokenAndResetPassword(email: $email, token: $token, password: $password) {
      ...UserForReset
    }
  }
  ${E}
`,H=y.a`
  mutation logout {
    logout
  }
`,W=y.a`
  query checkUser($search: String!) {
    checkUser(search: $search) {
      status
      message
    }
  }
`,$=y.a`
  query getUser($email: String) {
    getUser(email: $email) {
      ...UserFields
    }
  }
  ${w}
`,G=y.a`
  query getUsers(
    $sort: String
    $offset: Int
    $limit: Int
    $search: String
    $email: [String]
    $account: [AccountType]
    $company: String
    $createdAt: String
  ) {
    getUsers(
      sort: $sort
      offset: $offset
      limit: $limit
      search: $search
      email: $email
      account: $account
      company: $company
      createdAt: $createdAt
    ) {
      name
      about
      email
      avatar {
        path
      }
      account
      members
      company {
        name
        email
        avatar {
          path
        }
      }
      role {
        id
        name
      }
    }
  }
`,Z=y.a`
  query getUsers(
    $sort: String
    $offset: Int
    $limit: Int
    $search: String
    $email: [String]
    $account: [AccountType]
    $company: String
  ) {
    getUsers(
      sort: $sort
      offset: $offset
      limit: $limit
      search: $search
      email: $email
      account: $account
      company: $company
    ) {
      name
      email
    }
  }
`,K=y.a`
  query getUserMembers($email: String!) {
    getUserMembers(email: $email) {
      ...UserMemberFields
    }
  }
  ${M}
`,Y=y.a`
  query getProjects($member: String) {
    getProjects(member: $member) {
      ...ProjectFields
    }
  }
  ${k}
`,Q=y.a`
  query getProjects($author: String) {
    getProjects(author: $author) {
      ...ProjectFields
    }
  }
  ${k}
`,X=y.a`
  mutation createUser($input: UserCreateInput!) {
    createUser(input: $input) {
      ...UserFields
    }
  }
  ${w}
`,J=y.a`
  mutation updateClientUser($input: UserUpdateInput!) {
    updateClientUser(input: $input) {
      ...UserFields
    }
  }
  ${w}
`,ee=y.a`
  mutation updateUser($email: String!, $input: UserUpdateInput!) {
    updateUser(email: $email, input: $input) {
      ...UserFields
    }
  }
  ${w}
`,te=y.a`
  mutation deleteUser($email: [String]!) {
    deleteUser(email: $email) {
      ...UserFields
    }
  }
  ${w}
`,re=y.a`
  mutation inviteUserMember($email: String!) {
    inviteUserMember(email: $email)
  }
`,ne=y.a`
  mutation applyInviteUserMember($id: ID!, $email: String!) {
    applyInviteUserMember(id: $id, email: $email) {
      ...NoticeFields
    }
  }
  ${_}
`,ie=y.a`
  mutation rejectInviteUserMember($id: ID!, $email: String!) {
    rejectInviteUserMember(id: $id, email: $email) {
      ...NoticeFields
    }
  }
  ${_}
`,oe=y.a`
  mutation appointUserMember($email: String!) {
    appointUserMember(email: $email) {
      ...UserMemberFields
    }
  }
  ${M}
`,ae=y.a`
  mutation excludeUserMember($email: String!) {
    excludeUserMember(email: $email) {
      ...UserMemberFields
    }
  }
  ${M}
`,se=y.a`
  mutation dismissUserMember($email: String!) {
    dismissUserMember(email: $email) {
      ...UserMemberFields
    }
  }
  ${M}
`,le=y.a`
  mutation addUserProject($project: ID!, $folder: ID!) {
    addUserProject(project: $project, folder: $folder)
  }
`,ce=y.a`
  mutation removeUserProject($project: ID!, $folder: ID!) {
    removeUserProject(project: $project, folder: $folder)
  }
`,ue=y.a`
  mutation addUserFolder($name: String!) {
    addUserFolder(name: $name) {
      id
      name
      projects
    }
  }
`,he=y.a`
  mutation deleteUserFolder($id: ID!) {
    deleteUserFolder(id: $id) {
      id
      name
      projects
    }
  }
`,de=y.a`
  query getUserChats {
    getUserChats {
      chat {
        id
        type
        title
        members {
          name
          avatar {
            path
          }
        }
        messages {
          ...MessageFields
        }
      }
      status
      updatedAt
      createdAt
    }
  }
  ${x}
`,fe=y.a`
  query getStatusTicketTypes {
    getStatusTicketTypes
  }
`,pe=y.a`
  query getStatusChatTypes {
    getStatusChatTypes
  }
`,me=y.a`
  query getGenderTypes {
    getGenderTypes
  }
`,ve=y.a`
  query getAccountTypes {
    getAccountTypes
  }
`,ge=y.a`
  query getNoticeTypes {
    getNoticeTypes
  }
`,be=y.a`
  query getCategoryTypes {
    getCategoryTypes
  }
`,ye=y.a`
  query getPermissions {
    getPermissions
  }
`,we=y.a`
  query getPostStatus {
    getPostStatus
  }
`,Me=y.a`
  query getDashboardSettings {
    getDashboardSettings {
      general {
        logotype {
          path
        }
      }
      meta {
        title
        description
      }
    }
  }
`,Ee=y.a`
  query getDashboardSettings {
    getDashboardSettings {
      scaffold {
        title
        primary {
          ...ProjectFields
        }
        residues {
          ...ProjectFields
        }
        background {
          id
          filename
          size
          path
        }
      }
    }
  }
  ${k}
`,_e=y.a`
  query getMetaIndex($offset: Int, $limit: Int, $status: PostStatus) {
    getUsers(limit: 3, role: "USER") {
      ...UserFields
    }
    getArticles(status: $status) {
      ...ArticleFields
    }
    getProjects(offset: $offset, limit: $limit, status: $status) {
      ...ProjectFields
    }
  }
  ${w}
  ${O}
  ${k}
`,ke=y.a`
  query getMetaAuthors($offset: Int, $limit: Int, $search: String, $role: String) {
    getUsers(offset: $offset, limit: $limit, search: $search, role: $role) {
      ...UserFields
    }
  }
  ${w}
`,Oe=y.a`
  query getMetaArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
      ...ArticleFields
    }
    getCategories {
      ...CategoryFields
    }
  }
  ${O}
  ${j}
`,je=y.a`
  query getMetaProjects(
    $offset: Int
    $limit: Int
    $search: String
    $category: ID
    $status: PostStatus
  ) {
    getProjects(
      offset: $offset
      limit: $limit
      search: $search
      category: $category
      status: $status
    ) {
      ...ProjectFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${k}
  ${j}
`,xe=y.a`
  query getProjects(
    $offset: Int
    $limit: Int
    $search: String
    $category: ID
    $status: PostStatus
  ) {
    getProjects(
      offset: $offset
      limit: $limit
      search: $search
      category: $category
      status: $status
    ) {
      id
      title
    }
  }
`,Se=y.a`
  query getDashboardStatistics {
    getDashboardStatistics {
      title
      total
      graph {
        count
        createdAt
      }
    }
  }
`,Ce=y.a`
  query getDashboardActivities {
    getDashboardActivities {
      id
      user {
        name
        email
        avatar {
          path
        }
      }
      message
      entityType
      identityString
      createdAt
    }
  }
`,Ae=y.a`
  query getDashboardSettings {
    getDashboardSettings {
      ...DashboardSettingsFields
    }
  }
  ${L}
`,Ie=y.a`
  query getMetaDashboardPreviewArticles($offset: Int, $limit: Int) {
    getArticles(offset: $offset, limit: $limit) {
      id
      author {
        name
        avatar {
          path
        }
      }
      title
      body
      category {
        id
        name
      }
    }
  }
`,Pe=y.a`
  query getMetaDashboardPreviewProjects($offset: Int, $limit: Int) {
    getProjects(offset: $offset, limit: $limit) {
      id
      title
      description
      company {
        name
        email
        avatar {
          path
        }
      }
      category {
        id
        name
      }
      status
    }
  }
`,Te=y.a`
  query getMetaDashboardArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
      ...ArticleFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${O}
  ${j}
`,Re=y.a`
  query getMetaDashboardProjects(
    $offset: Int
    $limit: Int
    $search: String
    $category: ID
    $status: PostStatus
    $account: [AccountType]
    $role: String
  ) {
    getProjects(
      offset: $offset
      limit: $limit
      search: $search
      category: $category
      status: $status
    ) {
      ...ProjectFields
    }
    getUsers(account: $account, role: $role) {
      ...UserFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${w}
  ${k}
  ${j}
`,Le=y.a`
  query getMetaDashboardCategories($offset: Int, $limit: Int) {
    getCategories(offset: $offset, limit: $limit) {
      ...CategoryFields
    }
    getCategoryTypes
  }
  ${j}
`,Ne=y.a`
  query getMetaDashboardTickets($offset: Int, $limit: Int) {
    getTickets(offset: $offset, limit: $limit) {
      ...TicketFields
    }
  }
  ${T}
`,De=y.a`
  query getMetaDashboardUsers($offset: Int, $limit: Int, $role: String) {
    getUsers(offset: $offset, limit: $limit, role: $role) {
      name
      email
      phone
      avatar {
        id
        path
        size
      }
      about
      members
      company {
        name
        email
        avatar {
          path
        }
      }
      account
      role {
        id
        name
      }
    }
    getRoles {
      ...RoleFields
    }
  }
  ${P}
`,Ue=y.a`
  query getMetaDashboardRoles($offset: Int, $limit: Int) {
    getRoles(offset: $offset, limit: $limit) {
      ...RoleFields
    }
    getPermissions
  }
  ${P}
`,ze=y.a`
  mutation updateMetaDashboardSettings($input: DashboardSettingsInput!) {
    updateDashboardSettings(input: $input) {
      ...DashboardSettingsFields
    }
  }
  ${L}
`,Be=y.a`
  query getChat($id: ID!) {
    getChat(id: $id) {
      ...ChatFields
      messages {
        ...MessageFields
      }
    }
  }
  ${C}
  ${x}
`,Fe=y.a`
  query getRole($id: ID!) {
    getRole(id: $id) {
      ...RoleFields
    }
  }
  ${P}
`,Ve=y.a`
  query getRoles(
    $sort: String
    $offset: Int
    $limit: Int
    $search: String
    $permissions: [Permission]
    $createdAt: String
  ) {
    getRoles(
      sort: $sort
      offset: $offset
      limit: $limit
      search: $search
      permissions: $permissions
      createdAt: $createdAt
    ) {
      ...RoleFields
    }
  }
  ${P}
`,qe=y.a`
  mutation createRole($input: RoleCreateInput!) {
    createRole(input: $input) {
      ...RoleFields
    }
  }
  ${P}
`,He=y.a`
  mutation updateRole($id: ID!, $input: RoleUpdateInput!) {
    updateRole(id: $id, input: $input) {
      ...RoleFields
    }
  }
  ${P}
`,We=y.a`
  mutation deleteRole($id: [ID]!) {
    deleteRole(id: $id) {
      ...RoleFields
    }
  }
  ${P}
`,$e=y.a`
  mutation getFiles($sort: String, $search: String) {
    getFiles(sort: $sort, search: $search) {
      ...FileFields
    }
  }
  ${I}
`,Ge=y.a`
  mutation createFile($file: Upload!) {
    createFile(file: $file) {
      ...FileFields
    }
  }
  ${I}
`,Ze=y.a`
  mutation deleteFile($id: ID!) {
    deleteFile(id: $id) {
      ...FileFields
    }
  }
  ${I}
`,Ke=y.a`
  mutation getImages($sort: String, $search: String) {
    getImages(sort: $sort, search: $search) {
      ...ImageFields
    }
  }
  ${A}
`,Ye=y.a`
  mutation createImage($file: Upload!) {
    createImage(file: $file) {
      ...ImageFields
    }
  }
  ${A}
`,Qe=y.a`
  mutation deleteImage($id: ID!) {
    deleteImage(id: $id) {
      ...ImageFields
    }
  }
  ${A}
`,Xe=y.a`
  query getTicket($id: ID!) {
    getTicket(id: $id) {
      ...TicketFields
    }
  }
  ${T}
`,Je=y.a`
  query getTickets(
    $sort: String
    $offset: Int
    $limit: Int
    $search: String
    $author: String
    $counsellor: String
    $category: String
    $status: StatusTicket
    $createdAt: String
  ) {
    getTickets(
      sort: $sort
      offset: $offset
      limit: $limit
      search: $search
      author: $author
      counsellor: $counsellor
      category: $category
      status: $status
      createdAt: $createdAt
    ) {
      ...TicketFields
    }
  }
  ${T}
`,et=y.a`
  query getUserTickets {
    getUserTickets {
      ...TicketFields
    }
  }
  ${T}
`,tt=y.a`
  mutation createUserTicket($input: UserTicketCreateInput!) {
    createUserTicket(input: $input)
  }
`,rt=y.a`
  mutation createTicket($input: TicketCreateInput!) {
    createTicket(input: $input) {
      ...TicketFields
    }
  }
  ${T}
`,nt=y.a`
  mutation updateTicket($id: ID!, $input: TicketUpdateInput!) {
    updateTicket(id: $id, input: $input) {
      ...TicketFields
    }
  }
  ${T}
`,it=y.a`
  mutation deleteTicket($id: [ID]!) {
    deleteTicket(id: $id) {
      ...TicketFields
    }
  }
  ${T}
`,ot=y.a`
  mutation closeTicket($id: ID!) {
    closeTicket(id: $id) {
      ...TicketFields
    }
  }
  ${T}
`,at=y.a`
  query getUserChats {
    getUserChats {
      chat {
        ...ChatFields
        messages {
          ...MessageFields
        }
      }
      status
      updatedAt
      createdAt
    }
  }
  ${C}
  ${x}
`,st=y.a`
  mutation addUserChat($recipient: String!) {
    addUserChat(recipient: $recipient)
  }
`,lt=y.a`
  mutation sendMessage($recipient: String!, $text: String!) {
    sendMessage(recipient: $recipient, text: $text) {
      ...MessageFields
    }
  }
  ${x}
`,ct=y.a`
  mutation readMessages($id: [ID]!) {
    readMessages(id: $id)
  }
`,ut=y.a`
  mutation sendTicketMessage(
    $ticket: ID!
    $recipient: String!
    $text: String!
    $isClient: Boolean
  ) {
    sendTicketMessage(ticket: $ticket, recipient: $recipient, text: $text, isClient: $isClient) {
      ...TicketMessageFields
    }
  }
  ${S}
`,ht=y.a`
  query getArticle($id: ID!) {
    getArticle(id: $id) {
      ...ArticleFields
    }
  }
  ${O}
`,dt=y.a`
  query getArticles(
    $sort: String
    $offset: Int
    $limit: Int
    $category: ID
    $search: String
    $author: String
    $status: PostStatus
    $createdAt: String
  ) {
    getArticles(
      sort: $sort
      offset: $offset
      limit: $limit
      category: $category
      search: $search
      author: $author
      status: $status
      createdAt: $createdAt
    ) {
      id
      author {
        name
        avatar {
          path
        }
      }
      title
      body
      preview {
        path
      }
      category {
        id
        name
      }
    }
  }
`,ft=y.a`
  mutation createArticle($input: ArticleCreateInput!, $status: PostStatus) {
    createArticle(input: $input, status: $status) {
      ...ArticleFields
    }
  }
  ${O}
`,pt=y.a`
  mutation updateArticle($id: ID!, $input: ArticleUpdateInput!, $status: PostStatus) {
    updateArticle(id: $id, input: $input, status: $status) {
      ...ArticleFields
    }
  }
  ${O}
`,mt=y.a`
  mutation deleteArticle($id: [ID]!, $status: PostStatus) {
    deleteArticle(id: $id, status: $status) {
      ...ArticleFields
    }
  }
  ${O}
`,vt=y.a`
  query getProject($id: ID!) {
    getProject(id: $id) {
      ...ProjectFields
    }
  }
  ${k}
`,gt=y.a`
  query getProjects(
    $sort: String
    $offset: Int
    $limit: Int
    $category: ID
    $rating: [String]
    $author: String
    $search: String
    $company: String
    $status: PostStatus
    $createdAt: String
  ) {
    getProjects(
      sort: $sort
      offset: $offset
      limit: $limit
      category: $category
      rating: $rating
      author: $author
      search: $search
      company: $company
      status: $status
      createdAt: $createdAt
    ) {
      id
      title
      description
      company {
        name
        email
        avatar {
          path
        }
      }
      preview {
        id
        path
      }
      screenshots {
        id
        path
      }
      category {
        id
        name
      }
      rating {
        email
        phone
      }
      status
    }
  }
`,bt=y.a`
  query getProjectsByIds($projects: [ID]!, $status: PostStatus) {
    getProjectsByIds(projects: $projects, status: $status) {
      ...ProjectFields
    }
  }
  ${k}
`,yt=y.a`
  mutation likeProject($id: ID!) {
    likeProject(id: $id) {
      ...ProjectFields
    }
  }
  ${k}
`,wt=y.a`
  mutation createProject($input: ProjectCreateInput!, $status: PostStatus) {
    createProject(input: $input, status: $status) {
      ...ProjectFields
    }
  }
  ${k}
`,Mt=y.a`
  mutation updateProject($id: ID!, $input: ProjectUpdateInput!, $status: PostStatus) {
    updateProject(id: $id, input: $input, status: $status) {
      ...ProjectFields
    }
  }
  ${k}
`,Et=y.a`
  mutation deleteProject($id: [ID]!, $status: PostStatus) {
    deleteProject(id: $id, status: $status) {
      ...ProjectFields
    }
  }
  ${k}
`,_t=y.a`
  query getCategory($id: ID!) {
    getCategory(id: $id) {
      ...CategoryFields
    }
  }
  ${j}
`,kt=y.a`
  query getCategories(
    $sort: String
    $offset: Int
    $limit: Int
    $type: CategoryType
    $search: String
    $createdAt: String
  ) {
    getCategories(
      sort: $sort
      offset: $offset
      limit: $limit
      type: $type
      search: $search
      createdAt: $createdAt
    ) {
      ...CategoryFields
    }
  }
  ${j}
`,Ot=y.a`
  mutation createCategory($input: CategoryCreateInput!) {
    createCategory(input: $input) {
      ...CategoryFields
    }
  }
  ${j}
`,jt=y.a`
  mutation updateCategory($id: ID!, $input: CategoryUpdateInput!) {
    updateCategory(id: $id, input: $input) {
      ...CategoryFields
    }
  }
  ${j}
`,xt=y.a`
  mutation deleteCategory($id: [ID]!) {
    deleteCategory(id: $id) {
      ...CategoryFields
    }
  }
  ${j}
`,St=y.a`
  query getComments($id: ID!) {
    getComments(id: $id) {
      ...CommentFields
    }
  }
  ${R}
`,Ct=y.a`
  mutation sendComment($article: ID!, $text: String!) {
    sendComment(article: $article, text: $text) {
      ...CommentFields
    }
  }
  ${R}
`,At=y.a`
  mutation likeComment($comment: ID!, $likedUser: String, $liked: Boolean!) {
    likeComment(comment: $comment, likedUser: $likedUser, liked: $liked) {
      ...CommentFields
    }
  }
  ${R}
`,It=y.a`
  mutation createComment($input: CommentCreateInput!) {
    createComment(input: $input) {
      ...CommentFields
    }
  }
  ${R}
`,Pt=y.a`
  mutation updateComment($id: ID!, $input: CommentUpdateInput!) {
    updateComment(id: $id, input: $input) {
      ...CommentFields
    }
  }
  ${R}
`,Tt=y.a`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      ...CommentFields
    }
  }
  ${R}
`,Rt=y.a`
  query getNotifications($author: String) {
    getNotifications(author: $author) {
      ...NoticeFields
    }
  }
  ${_}
`;t.a={...n,...i,...o,...a,...s,...l,...c,...u,...h,...d,...f,...p,...m,...v,...g}},u6sg:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},uDfV:function(e,t,r){var n=r("P7XM"),i=r("T9HO"),o=r("tnIz"),a=r("hwdV").Buffer,s=new Array(160);function l(){this.init(),this._w=s,o.call(this,128,112)}n(l,i),l.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},l.prototype._hash=function(){var e=a.allocUnsafe(48);function t(t,r,n){e.writeInt32BE(t,n),e.writeInt32BE(r,n+4)}return t(this._ah,this._al,0),t(this._bh,this._bl,8),t(this._ch,this._cl,16),t(this._dh,this._dl,24),t(this._eh,this._el,32),t(this._fh,this._fl,40),e},e.exports=l},uagp:function(e,t,r){"use strict";var n=r("gK+I"),i=r("aqI/"),o=r("86MQ"),a=r("DLvh"),s=r("/ayr"),l=o.assert,c=r("uzSA"),u=r("tz+M");function h(e){if(!(this instanceof h))return new h(e);"string"===typeof e&&(l(Object.prototype.hasOwnProperty.call(a,e),"Unknown curve "+e),e=a[e]),e instanceof a.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}e.exports=h,h.prototype.keyPair=function(e){return new c(this,e)},h.prototype.keyFromPrivate=function(e,t){return c.fromPrivate(this,e,t)},h.prototype.keyFromPublic=function(e,t){return c.fromPublic(this,e,t)},h.prototype.genKeyPair=function(e){e||(e={});for(var t=new i({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||s(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),o=this.n.sub(new n(2));;){var a=new n(t.generate(r));if(!(a.cmp(o)>0))return a.iaddn(1),this.keyFromPrivate(a)}},h.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return r>0&&(e=e.ushrn(r)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},h.prototype.sign=function(e,t,r,o){"object"===typeof r&&(o=r,r=null),o||(o={}),t=this.keyFromPrivate(t,r),e=this._truncateToN(new n(e,16));for(var a=this.n.byteLength(),s=t.getPrivate().toArray("be",a),l=e.toArray("be",a),c=new i({hash:this.hash,entropy:s,nonce:l,pers:o.pers,persEnc:o.persEnc||"utf8"}),h=this.n.sub(new n(1)),d=0;;d++){var f=o.k?o.k(d):new n(c.generate(this.n.byteLength()));if(!((f=this._truncateToN(f,!0)).cmpn(1)<=0||f.cmp(h)>=0)){var p=this.g.mul(f);if(!p.isInfinity()){var m=p.getX(),v=m.umod(this.n);if(0!==v.cmpn(0)){var g=f.invm(this.n).mul(v.mul(t.getPrivate()).iadd(e));if(0!==(g=g.umod(this.n)).cmpn(0)){var b=(p.getY().isOdd()?1:0)|(0!==m.cmp(v)?2:0);return o.canonical&&g.cmp(this.nh)>0&&(g=this.n.sub(g),b^=1),new u({r:v,s:g,recoveryParam:b})}}}}}},h.prototype.verify=function(e,t,r,i){e=this._truncateToN(new n(e,16)),r=this.keyFromPublic(r,i);var o=(t=new u(t,"hex")).r,a=t.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;if(a.cmpn(1)<0||a.cmp(this.n)>=0)return!1;var s,l=a.invm(this.n),c=l.mul(e).umod(this.n),h=l.mul(o).umod(this.n);return this.curve._maxwellTrick?!(s=this.g.jmulAdd(c,r.getPublic(),h)).isInfinity()&&s.eqXToP(o):!(s=this.g.mulAdd(c,r.getPublic(),h)).isInfinity()&&0===s.getX().umod(this.n).cmp(o)},h.prototype.recoverPubKey=function(e,t,r,i){l((3&r)===r,"The recovery param is more than two bits"),t=new u(t,i);var o=this.n,a=new n(e),s=t.r,c=t.s,h=1&r,d=r>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&d)throw new Error("Unable to find sencond key candinate");s=d?this.curve.pointFromX(s.add(this.curve.n),h):this.curve.pointFromX(s,h);var f=t.r.invm(o),p=o.sub(a).mul(f).umod(o),m=c.mul(f).umod(o);return this.g.mulAdd(p,s,m)},h.prototype.getKeyRecoveryParam=function(e,t,r,n){if(null!==(t=new u(t,n)).recoveryParam)return t.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(e,t,i)}catch(e){continue}if(o.eq(r))return i}throw new Error("Unable to find valid recovery factor")}},usKN:function(e,t,r){var n={ECB:r("AUX7"),CBC:r("wRn4"),CFB:r("NQVK"),CFB8:r("YskG"),CFB1:r("Ujlg"),OFB:r("UWVS"),CTR:r("at63"),GCM:r("at63")},i=r("6F8h");for(var o in i)i[o].module=n[i[o].mode];e.exports=i},uzSA:function(e,t,r){"use strict";var n=r("gK+I"),i=r("86MQ").assert;function o(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}e.exports=o,o.fromPublic=function(e,t,r){return t instanceof o?t:new o(e,{pub:t,pubEnc:r})},o.fromPrivate=function(e,t,r){return t instanceof o?t:new o(e,{priv:t,privEnc:r})},o.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},o.prototype.getPublic=function(e,t){return"string"===typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},o.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},o.prototype._importPrivate=function(e,t){this.priv=new n(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},o.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?i(e.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||i(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},o.prototype.derive=function(e){return e.validate()||i(e.validate(),"public point not validated"),e.mul(this.priv).getX()},o.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},o.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},o.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},vBIh:function(e,t,r){(function(e){!function(e,t){"use strict";function n(e,t){if(!e)throw new Error(t||"Assertion failed")}function i(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function o(e,t,r){if(o.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&("le"!==t&&"be"!==t||(r=t,t=10),this._init(e||0,t||10,r||"be"))}var a;"object"===typeof e?e.exports=o:t.BN=o,o.BN=o,o.wordSize=26;try{a="undefined"!==typeof window&&"undefined"!==typeof window.Buffer?window.Buffer:r(10).Buffer}catch(O){}function s(e,t){var r=e.charCodeAt(t);return r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:r-48&15}function l(e,t,r){var n=s(e,r);return r-1>=t&&(n|=s(e,r-1)<<4),n}function c(e,t,r,n){for(var i=0,o=Math.min(e.length,r),a=t;a<o;a++){var s=e.charCodeAt(a)-48;i*=n,i+=s>=49?s-49+10:s>=17?s-17+10:s}return i}o.isBN=function(e){return e instanceof o||null!==e&&"object"===typeof e&&e.constructor.wordSize===o.wordSize&&Array.isArray(e.words)},o.max=function(e,t){return e.cmp(t)>0?e:t},o.min=function(e,t){return e.cmp(t)<0?e:t},o.prototype._init=function(e,t,r){if("number"===typeof e)return this._initNumber(e,t,r);if("object"===typeof e)return this._initArray(e,t,r);"hex"===t&&(t=16),n(t===(0|t)&&t>=2&&t<=36);var i=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&(i++,this.negative=1),i<e.length&&(16===t?this._parseHex(e,i,r):(this._parseBase(e,t,i),"le"===r&&this._initArray(this.toArray(),t,r)))},o.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(n(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),t,r)},o.prototype._initArray=function(e,t,r){if(n("number"===typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,a,s=0;if("be"===r)for(i=e.length-1,o=0;i>=0;i-=3)a=e[i]|e[i-1]<<8|e[i-2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++);else if("le"===r)for(i=0,o=0;i<e.length;i+=3)a=e[i]|e[i+1]<<8|e[i+2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++);return this.strip()},o.prototype._parseHex=function(e,t,r){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var n=0;n<this.length;n++)this.words[n]=0;var i,o=0,a=0;if("be"===r)for(n=e.length-1;n>=t;n-=2)i=l(e,t,n)<<o,this.words[a]|=67108863&i,o>=18?(o-=18,a+=1,this.words[a]|=i>>>26):o+=8;else for(n=(e.length-t)%2===0?t+1:t;n<e.length;n+=2)i=l(e,t,n)<<o,this.words[a]|=67108863&i,o>=18?(o-=18,a+=1,this.words[a]|=i>>>26):o+=8;this.strip()},o.prototype._parseBase=function(e,t,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=t)n++;n--,i=i/t|0;for(var o=e.length-r,a=o%n,s=Math.min(o,o-a)+r,l=0,u=r;u<s;u+=n)l=c(e,u,u+n,t),this.imuln(i),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l);if(0!==a){var h=1;for(l=c(e,u,e.length,t),u=0;u<a;u++)h*=t;this.imuln(h),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l)}this.strip()},o.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},o.prototype.clone=function(){var e=new o(null);return this.copy(e),e},o.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var u=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],h=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],d=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function f(e,t,r){r.negative=t.negative^e.negative;var n=e.length+t.length|0;r.length=n,n=n-1|0;var i=0|e.words[0],o=0|t.words[0],a=i*o,s=67108863&a,l=a/67108864|0;r.words[0]=s;for(var c=1;c<n;c++){for(var u=l>>>26,h=67108863&l,d=Math.min(c,t.length-1),f=Math.max(0,c-e.length+1);f<=d;f++){var p=c-f|0;u+=(a=(i=0|e.words[p])*(o=0|t.words[f])+h)/67108864|0,h=67108863&a}r.words[c]=0|h,l=0|u}return 0!==l?r.words[c]=0|l:r.length--,r.strip()}o.prototype.toString=function(e,t){var r;if(t=0|t||1,16===(e=e||10)||"hex"===e){r="";for(var i=0,o=0,a=0;a<this.length;a++){var s=this.words[a],l=(16777215&(s<<i|o)).toString(16);r=0!==(o=s>>>24-i&16777215)||a!==this.length-1?u[6-l.length]+l+r:l+r,(i+=2)>=26&&(i-=26,a--)}for(0!==o&&(r=o.toString(16)+r);r.length%t!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(e===(0|e)&&e>=2&&e<=36){var c=h[e],f=d[e];r="";var p=this.clone();for(p.negative=0;!p.isZero();){var m=p.modn(f).toString(e);r=(p=p.idivn(f)).isZero()?m+r:u[c-m.length]+m+r}for(this.isZero()&&(r="0"+r);r.length%t!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(e,t){return n("undefined"!==typeof a),this.toArrayLike(a,e,t)},o.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},o.prototype.toArrayLike=function(e,t,r){var i=this.byteLength(),o=r||Math.max(1,i);n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0"),this.strip();var a,s,l="le"===t,c=new e(o),u=this.clone();if(l){for(s=0;!u.isZero();s++)a=u.andln(255),u.iushrn(8),c[s]=a;for(;s<o;s++)c[s]=0}else{for(s=0;s<o-i;s++)c[s]=0;for(s=0;!u.isZero();s++)a=u.andln(255),u.iushrn(8),c[o-s-1]=a}return c},Math.clz32?o.prototype._countBits=function(e){return 32-Math.clz32(e)}:o.prototype._countBits=function(e){var t=e,r=0;return t>=4096&&(r+=13,t>>>=13),t>=64&&(r+=7,t>>>=7),t>=8&&(r+=4,t>>>=4),t>=2&&(r+=2,t>>>=2),r+t},o.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return 0===(8191&t)&&(r+=13,t>>>=13),0===(127&t)&&(r+=7,t>>>=7),0===(15&t)&&(r+=4,t>>>=4),0===(3&t)&&(r+=2,t>>>=2),0===(1&t)&&r++,r},o.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},o.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this.strip()},o.prototype.ior=function(e){return n(0===(this.negative|e.negative)),this.iuor(e)},o.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},o.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},o.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this.strip()},o.prototype.iand=function(e){return n(0===(this.negative|e.negative)),this.iuand(e)},o.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},o.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},o.prototype.iuxor=function(e){var t,r;this.length>e.length?(t=this,r=e):(t=e,r=this);for(var n=0;n<r.length;n++)this.words[n]=t.words[n]^r.words[n];if(this!==t)for(;n<t.length;n++)this.words[n]=t.words[n];return this.length=t.length,this.strip()},o.prototype.ixor=function(e){return n(0===(this.negative|e.negative)),this.iuxor(e)},o.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},o.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},o.prototype.inotn=function(e){n("number"===typeof e&&e>=0);var t=0|Math.ceil(e/26),r=e%26;this._expand(t),r>0&&t--;for(var i=0;i<t;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},o.prototype.notn=function(e){return this.clone().inotn(e)},o.prototype.setn=function(e,t){n("number"===typeof e&&e>=0);var r=e/26|0,i=e%26;return this._expand(r+1),this.words[r]=t?this.words[r]|1<<i:this.words[r]&~(1<<i),this.strip()},o.prototype.iadd=function(e){var t,r,n;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();this.length>e.length?(r=this,n=e):(r=e,n=this);for(var i=0,o=0;o<n.length;o++)t=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&t,i=t>>>26;for(;0!==i&&o<r.length;o++)t=(0|r.words[o])+i,this.words[o]=67108863&t,i=t>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},o.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},o.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var r,n,i=this.cmp(e);if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this;i>0?(r=this,n=e):(r=e,n=this);for(var o=0,a=0;a<n.length;a++)o=(t=(0|r.words[a])-(0|n.words[a])+o)>>26,this.words[a]=67108863&t;for(;0!==o&&a<r.length;a++)o=(t=(0|r.words[a])+o)>>26,this.words[a]=67108863&t;if(0===o&&a<r.length&&r!==this)for(;a<r.length;a++)this.words[a]=r.words[a];return this.length=Math.max(this.length,a),r!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(e){return this.clone().isub(e)};var p=function(e,t,r){var n,i,o,a=e.words,s=t.words,l=r.words,c=0,u=0|a[0],h=8191&u,d=u>>>13,f=0|a[1],p=8191&f,m=f>>>13,v=0|a[2],g=8191&v,b=v>>>13,y=0|a[3],w=8191&y,M=y>>>13,E=0|a[4],_=8191&E,k=E>>>13,O=0|a[5],j=8191&O,x=O>>>13,S=0|a[6],C=8191&S,A=S>>>13,I=0|a[7],P=8191&I,T=I>>>13,R=0|a[8],L=8191&R,N=R>>>13,D=0|a[9],U=8191&D,z=D>>>13,B=0|s[0],F=8191&B,V=B>>>13,q=0|s[1],H=8191&q,W=q>>>13,$=0|s[2],G=8191&$,Z=$>>>13,K=0|s[3],Y=8191&K,Q=K>>>13,X=0|s[4],J=8191&X,ee=X>>>13,te=0|s[5],re=8191&te,ne=te>>>13,ie=0|s[6],oe=8191&ie,ae=ie>>>13,se=0|s[7],le=8191&se,ce=se>>>13,ue=0|s[8],he=8191&ue,de=ue>>>13,fe=0|s[9],pe=8191&fe,me=fe>>>13;r.negative=e.negative^t.negative,r.length=19;var ve=(c+(n=Math.imul(h,F))|0)+((8191&(i=(i=Math.imul(h,V))+Math.imul(d,F)|0))<<13)|0;c=((o=Math.imul(d,V))+(i>>>13)|0)+(ve>>>26)|0,ve&=67108863,n=Math.imul(p,F),i=(i=Math.imul(p,V))+Math.imul(m,F)|0,o=Math.imul(m,V);var ge=(c+(n=n+Math.imul(h,H)|0)|0)+((8191&(i=(i=i+Math.imul(h,W)|0)+Math.imul(d,H)|0))<<13)|0;c=((o=o+Math.imul(d,W)|0)+(i>>>13)|0)+(ge>>>26)|0,ge&=67108863,n=Math.imul(g,F),i=(i=Math.imul(g,V))+Math.imul(b,F)|0,o=Math.imul(b,V),n=n+Math.imul(p,H)|0,i=(i=i+Math.imul(p,W)|0)+Math.imul(m,H)|0,o=o+Math.imul(m,W)|0;var be=(c+(n=n+Math.imul(h,G)|0)|0)+((8191&(i=(i=i+Math.imul(h,Z)|0)+Math.imul(d,G)|0))<<13)|0;c=((o=o+Math.imul(d,Z)|0)+(i>>>13)|0)+(be>>>26)|0,be&=67108863,n=Math.imul(w,F),i=(i=Math.imul(w,V))+Math.imul(M,F)|0,o=Math.imul(M,V),n=n+Math.imul(g,H)|0,i=(i=i+Math.imul(g,W)|0)+Math.imul(b,H)|0,o=o+Math.imul(b,W)|0,n=n+Math.imul(p,G)|0,i=(i=i+Math.imul(p,Z)|0)+Math.imul(m,G)|0,o=o+Math.imul(m,Z)|0;var ye=(c+(n=n+Math.imul(h,Y)|0)|0)+((8191&(i=(i=i+Math.imul(h,Q)|0)+Math.imul(d,Y)|0))<<13)|0;c=((o=o+Math.imul(d,Q)|0)+(i>>>13)|0)+(ye>>>26)|0,ye&=67108863,n=Math.imul(_,F),i=(i=Math.imul(_,V))+Math.imul(k,F)|0,o=Math.imul(k,V),n=n+Math.imul(w,H)|0,i=(i=i+Math.imul(w,W)|0)+Math.imul(M,H)|0,o=o+Math.imul(M,W)|0,n=n+Math.imul(g,G)|0,i=(i=i+Math.imul(g,Z)|0)+Math.imul(b,G)|0,o=o+Math.imul(b,Z)|0,n=n+Math.imul(p,Y)|0,i=(i=i+Math.imul(p,Q)|0)+Math.imul(m,Y)|0,o=o+Math.imul(m,Q)|0;var we=(c+(n=n+Math.imul(h,J)|0)|0)+((8191&(i=(i=i+Math.imul(h,ee)|0)+Math.imul(d,J)|0))<<13)|0;c=((o=o+Math.imul(d,ee)|0)+(i>>>13)|0)+(we>>>26)|0,we&=67108863,n=Math.imul(j,F),i=(i=Math.imul(j,V))+Math.imul(x,F)|0,o=Math.imul(x,V),n=n+Math.imul(_,H)|0,i=(i=i+Math.imul(_,W)|0)+Math.imul(k,H)|0,o=o+Math.imul(k,W)|0,n=n+Math.imul(w,G)|0,i=(i=i+Math.imul(w,Z)|0)+Math.imul(M,G)|0,o=o+Math.imul(M,Z)|0,n=n+Math.imul(g,Y)|0,i=(i=i+Math.imul(g,Q)|0)+Math.imul(b,Y)|0,o=o+Math.imul(b,Q)|0,n=n+Math.imul(p,J)|0,i=(i=i+Math.imul(p,ee)|0)+Math.imul(m,J)|0,o=o+Math.imul(m,ee)|0;var Me=(c+(n=n+Math.imul(h,re)|0)|0)+((8191&(i=(i=i+Math.imul(h,ne)|0)+Math.imul(d,re)|0))<<13)|0;c=((o=o+Math.imul(d,ne)|0)+(i>>>13)|0)+(Me>>>26)|0,Me&=67108863,n=Math.imul(C,F),i=(i=Math.imul(C,V))+Math.imul(A,F)|0,o=Math.imul(A,V),n=n+Math.imul(j,H)|0,i=(i=i+Math.imul(j,W)|0)+Math.imul(x,H)|0,o=o+Math.imul(x,W)|0,n=n+Math.imul(_,G)|0,i=(i=i+Math.imul(_,Z)|0)+Math.imul(k,G)|0,o=o+Math.imul(k,Z)|0,n=n+Math.imul(w,Y)|0,i=(i=i+Math.imul(w,Q)|0)+Math.imul(M,Y)|0,o=o+Math.imul(M,Q)|0,n=n+Math.imul(g,J)|0,i=(i=i+Math.imul(g,ee)|0)+Math.imul(b,J)|0,o=o+Math.imul(b,ee)|0,n=n+Math.imul(p,re)|0,i=(i=i+Math.imul(p,ne)|0)+Math.imul(m,re)|0,o=o+Math.imul(m,ne)|0;var Ee=(c+(n=n+Math.imul(h,oe)|0)|0)+((8191&(i=(i=i+Math.imul(h,ae)|0)+Math.imul(d,oe)|0))<<13)|0;c=((o=o+Math.imul(d,ae)|0)+(i>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,n=Math.imul(P,F),i=(i=Math.imul(P,V))+Math.imul(T,F)|0,o=Math.imul(T,V),n=n+Math.imul(C,H)|0,i=(i=i+Math.imul(C,W)|0)+Math.imul(A,H)|0,o=o+Math.imul(A,W)|0,n=n+Math.imul(j,G)|0,i=(i=i+Math.imul(j,Z)|0)+Math.imul(x,G)|0,o=o+Math.imul(x,Z)|0,n=n+Math.imul(_,Y)|0,i=(i=i+Math.imul(_,Q)|0)+Math.imul(k,Y)|0,o=o+Math.imul(k,Q)|0,n=n+Math.imul(w,J)|0,i=(i=i+Math.imul(w,ee)|0)+Math.imul(M,J)|0,o=o+Math.imul(M,ee)|0,n=n+Math.imul(g,re)|0,i=(i=i+Math.imul(g,ne)|0)+Math.imul(b,re)|0,o=o+Math.imul(b,ne)|0,n=n+Math.imul(p,oe)|0,i=(i=i+Math.imul(p,ae)|0)+Math.imul(m,oe)|0,o=o+Math.imul(m,ae)|0;var _e=(c+(n=n+Math.imul(h,le)|0)|0)+((8191&(i=(i=i+Math.imul(h,ce)|0)+Math.imul(d,le)|0))<<13)|0;c=((o=o+Math.imul(d,ce)|0)+(i>>>13)|0)+(_e>>>26)|0,_e&=67108863,n=Math.imul(L,F),i=(i=Math.imul(L,V))+Math.imul(N,F)|0,o=Math.imul(N,V),n=n+Math.imul(P,H)|0,i=(i=i+Math.imul(P,W)|0)+Math.imul(T,H)|0,o=o+Math.imul(T,W)|0,n=n+Math.imul(C,G)|0,i=(i=i+Math.imul(C,Z)|0)+Math.imul(A,G)|0,o=o+Math.imul(A,Z)|0,n=n+Math.imul(j,Y)|0,i=(i=i+Math.imul(j,Q)|0)+Math.imul(x,Y)|0,o=o+Math.imul(x,Q)|0,n=n+Math.imul(_,J)|0,i=(i=i+Math.imul(_,ee)|0)+Math.imul(k,J)|0,o=o+Math.imul(k,ee)|0,n=n+Math.imul(w,re)|0,i=(i=i+Math.imul(w,ne)|0)+Math.imul(M,re)|0,o=o+Math.imul(M,ne)|0,n=n+Math.imul(g,oe)|0,i=(i=i+Math.imul(g,ae)|0)+Math.imul(b,oe)|0,o=o+Math.imul(b,ae)|0,n=n+Math.imul(p,le)|0,i=(i=i+Math.imul(p,ce)|0)+Math.imul(m,le)|0,o=o+Math.imul(m,ce)|0;var ke=(c+(n=n+Math.imul(h,he)|0)|0)+((8191&(i=(i=i+Math.imul(h,de)|0)+Math.imul(d,he)|0))<<13)|0;c=((o=o+Math.imul(d,de)|0)+(i>>>13)|0)+(ke>>>26)|0,ke&=67108863,n=Math.imul(U,F),i=(i=Math.imul(U,V))+Math.imul(z,F)|0,o=Math.imul(z,V),n=n+Math.imul(L,H)|0,i=(i=i+Math.imul(L,W)|0)+Math.imul(N,H)|0,o=o+Math.imul(N,W)|0,n=n+Math.imul(P,G)|0,i=(i=i+Math.imul(P,Z)|0)+Math.imul(T,G)|0,o=o+Math.imul(T,Z)|0,n=n+Math.imul(C,Y)|0,i=(i=i+Math.imul(C,Q)|0)+Math.imul(A,Y)|0,o=o+Math.imul(A,Q)|0,n=n+Math.imul(j,J)|0,i=(i=i+Math.imul(j,ee)|0)+Math.imul(x,J)|0,o=o+Math.imul(x,ee)|0,n=n+Math.imul(_,re)|0,i=(i=i+Math.imul(_,ne)|0)+Math.imul(k,re)|0,o=o+Math.imul(k,ne)|0,n=n+Math.imul(w,oe)|0,i=(i=i+Math.imul(w,ae)|0)+Math.imul(M,oe)|0,o=o+Math.imul(M,ae)|0,n=n+Math.imul(g,le)|0,i=(i=i+Math.imul(g,ce)|0)+Math.imul(b,le)|0,o=o+Math.imul(b,ce)|0,n=n+Math.imul(p,he)|0,i=(i=i+Math.imul(p,de)|0)+Math.imul(m,he)|0,o=o+Math.imul(m,de)|0;var Oe=(c+(n=n+Math.imul(h,pe)|0)|0)+((8191&(i=(i=i+Math.imul(h,me)|0)+Math.imul(d,pe)|0))<<13)|0;c=((o=o+Math.imul(d,me)|0)+(i>>>13)|0)+(Oe>>>26)|0,Oe&=67108863,n=Math.imul(U,H),i=(i=Math.imul(U,W))+Math.imul(z,H)|0,o=Math.imul(z,W),n=n+Math.imul(L,G)|0,i=(i=i+Math.imul(L,Z)|0)+Math.imul(N,G)|0,o=o+Math.imul(N,Z)|0,n=n+Math.imul(P,Y)|0,i=(i=i+Math.imul(P,Q)|0)+Math.imul(T,Y)|0,o=o+Math.imul(T,Q)|0,n=n+Math.imul(C,J)|0,i=(i=i+Math.imul(C,ee)|0)+Math.imul(A,J)|0,o=o+Math.imul(A,ee)|0,n=n+Math.imul(j,re)|0,i=(i=i+Math.imul(j,ne)|0)+Math.imul(x,re)|0,o=o+Math.imul(x,ne)|0,n=n+Math.imul(_,oe)|0,i=(i=i+Math.imul(_,ae)|0)+Math.imul(k,oe)|0,o=o+Math.imul(k,ae)|0,n=n+Math.imul(w,le)|0,i=(i=i+Math.imul(w,ce)|0)+Math.imul(M,le)|0,o=o+Math.imul(M,ce)|0,n=n+Math.imul(g,he)|0,i=(i=i+Math.imul(g,de)|0)+Math.imul(b,he)|0,o=o+Math.imul(b,de)|0;var je=(c+(n=n+Math.imul(p,pe)|0)|0)+((8191&(i=(i=i+Math.imul(p,me)|0)+Math.imul(m,pe)|0))<<13)|0;c=((o=o+Math.imul(m,me)|0)+(i>>>13)|0)+(je>>>26)|0,je&=67108863,n=Math.imul(U,G),i=(i=Math.imul(U,Z))+Math.imul(z,G)|0,o=Math.imul(z,Z),n=n+Math.imul(L,Y)|0,i=(i=i+Math.imul(L,Q)|0)+Math.imul(N,Y)|0,o=o+Math.imul(N,Q)|0,n=n+Math.imul(P,J)|0,i=(i=i+Math.imul(P,ee)|0)+Math.imul(T,J)|0,o=o+Math.imul(T,ee)|0,n=n+Math.imul(C,re)|0,i=(i=i+Math.imul(C,ne)|0)+Math.imul(A,re)|0,o=o+Math.imul(A,ne)|0,n=n+Math.imul(j,oe)|0,i=(i=i+Math.imul(j,ae)|0)+Math.imul(x,oe)|0,o=o+Math.imul(x,ae)|0,n=n+Math.imul(_,le)|0,i=(i=i+Math.imul(_,ce)|0)+Math.imul(k,le)|0,o=o+Math.imul(k,ce)|0,n=n+Math.imul(w,he)|0,i=(i=i+Math.imul(w,de)|0)+Math.imul(M,he)|0,o=o+Math.imul(M,de)|0;var xe=(c+(n=n+Math.imul(g,pe)|0)|0)+((8191&(i=(i=i+Math.imul(g,me)|0)+Math.imul(b,pe)|0))<<13)|0;c=((o=o+Math.imul(b,me)|0)+(i>>>13)|0)+(xe>>>26)|0,xe&=67108863,n=Math.imul(U,Y),i=(i=Math.imul(U,Q))+Math.imul(z,Y)|0,o=Math.imul(z,Q),n=n+Math.imul(L,J)|0,i=(i=i+Math.imul(L,ee)|0)+Math.imul(N,J)|0,o=o+Math.imul(N,ee)|0,n=n+Math.imul(P,re)|0,i=(i=i+Math.imul(P,ne)|0)+Math.imul(T,re)|0,o=o+Math.imul(T,ne)|0,n=n+Math.imul(C,oe)|0,i=(i=i+Math.imul(C,ae)|0)+Math.imul(A,oe)|0,o=o+Math.imul(A,ae)|0,n=n+Math.imul(j,le)|0,i=(i=i+Math.imul(j,ce)|0)+Math.imul(x,le)|0,o=o+Math.imul(x,ce)|0,n=n+Math.imul(_,he)|0,i=(i=i+Math.imul(_,de)|0)+Math.imul(k,he)|0,o=o+Math.imul(k,de)|0;var Se=(c+(n=n+Math.imul(w,pe)|0)|0)+((8191&(i=(i=i+Math.imul(w,me)|0)+Math.imul(M,pe)|0))<<13)|0;c=((o=o+Math.imul(M,me)|0)+(i>>>13)|0)+(Se>>>26)|0,Se&=67108863,n=Math.imul(U,J),i=(i=Math.imul(U,ee))+Math.imul(z,J)|0,o=Math.imul(z,ee),n=n+Math.imul(L,re)|0,i=(i=i+Math.imul(L,ne)|0)+Math.imul(N,re)|0,o=o+Math.imul(N,ne)|0,n=n+Math.imul(P,oe)|0,i=(i=i+Math.imul(P,ae)|0)+Math.imul(T,oe)|0,o=o+Math.imul(T,ae)|0,n=n+Math.imul(C,le)|0,i=(i=i+Math.imul(C,ce)|0)+Math.imul(A,le)|0,o=o+Math.imul(A,ce)|0,n=n+Math.imul(j,he)|0,i=(i=i+Math.imul(j,de)|0)+Math.imul(x,he)|0,o=o+Math.imul(x,de)|0;var Ce=(c+(n=n+Math.imul(_,pe)|0)|0)+((8191&(i=(i=i+Math.imul(_,me)|0)+Math.imul(k,pe)|0))<<13)|0;c=((o=o+Math.imul(k,me)|0)+(i>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,n=Math.imul(U,re),i=(i=Math.imul(U,ne))+Math.imul(z,re)|0,o=Math.imul(z,ne),n=n+Math.imul(L,oe)|0,i=(i=i+Math.imul(L,ae)|0)+Math.imul(N,oe)|0,o=o+Math.imul(N,ae)|0,n=n+Math.imul(P,le)|0,i=(i=i+Math.imul(P,ce)|0)+Math.imul(T,le)|0,o=o+Math.imul(T,ce)|0,n=n+Math.imul(C,he)|0,i=(i=i+Math.imul(C,de)|0)+Math.imul(A,he)|0,o=o+Math.imul(A,de)|0;var Ae=(c+(n=n+Math.imul(j,pe)|0)|0)+((8191&(i=(i=i+Math.imul(j,me)|0)+Math.imul(x,pe)|0))<<13)|0;c=((o=o+Math.imul(x,me)|0)+(i>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,n=Math.imul(U,oe),i=(i=Math.imul(U,ae))+Math.imul(z,oe)|0,o=Math.imul(z,ae),n=n+Math.imul(L,le)|0,i=(i=i+Math.imul(L,ce)|0)+Math.imul(N,le)|0,o=o+Math.imul(N,ce)|0,n=n+Math.imul(P,he)|0,i=(i=i+Math.imul(P,de)|0)+Math.imul(T,he)|0,o=o+Math.imul(T,de)|0;var Ie=(c+(n=n+Math.imul(C,pe)|0)|0)+((8191&(i=(i=i+Math.imul(C,me)|0)+Math.imul(A,pe)|0))<<13)|0;c=((o=o+Math.imul(A,me)|0)+(i>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,n=Math.imul(U,le),i=(i=Math.imul(U,ce))+Math.imul(z,le)|0,o=Math.imul(z,ce),n=n+Math.imul(L,he)|0,i=(i=i+Math.imul(L,de)|0)+Math.imul(N,he)|0,o=o+Math.imul(N,de)|0;var Pe=(c+(n=n+Math.imul(P,pe)|0)|0)+((8191&(i=(i=i+Math.imul(P,me)|0)+Math.imul(T,pe)|0))<<13)|0;c=((o=o+Math.imul(T,me)|0)+(i>>>13)|0)+(Pe>>>26)|0,Pe&=67108863,n=Math.imul(U,he),i=(i=Math.imul(U,de))+Math.imul(z,he)|0,o=Math.imul(z,de);var Te=(c+(n=n+Math.imul(L,pe)|0)|0)+((8191&(i=(i=i+Math.imul(L,me)|0)+Math.imul(N,pe)|0))<<13)|0;c=((o=o+Math.imul(N,me)|0)+(i>>>13)|0)+(Te>>>26)|0,Te&=67108863;var Re=(c+(n=Math.imul(U,pe))|0)+((8191&(i=(i=Math.imul(U,me))+Math.imul(z,pe)|0))<<13)|0;return c=((o=Math.imul(z,me))+(i>>>13)|0)+(Re>>>26)|0,Re&=67108863,l[0]=ve,l[1]=ge,l[2]=be,l[3]=ye,l[4]=we,l[5]=Me,l[6]=Ee,l[7]=_e,l[8]=ke,l[9]=Oe,l[10]=je,l[11]=xe,l[12]=Se,l[13]=Ce,l[14]=Ae,l[15]=Ie,l[16]=Pe,l[17]=Te,l[18]=Re,0!==c&&(l[19]=c,r.length++),r};function m(e,t,r){return(new v).mulp(e,t,r)}function v(e,t){this.x=e,this.y=t}Math.imul||(p=f),o.prototype.mulTo=function(e,t){var r=this.length+e.length;return 10===this.length&&10===e.length?p(this,e,t):r<63?f(this,e,t):r<1024?function(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var a=i;i=0;for(var s=67108863&n,l=Math.min(o,t.length-1),c=Math.max(0,o-e.length+1);c<=l;c++){var u=o-c,h=(0|e.words[u])*(0|t.words[c]),d=67108863&h;s=67108863&(d=d+s|0),i+=(a=(a=a+(h/67108864|0)|0)+(d>>>26)|0)>>>26,a&=67108863}r.words[o]=s,n=a,a=i}return 0!==n?r.words[o]=n:r.length--,r.strip()}(this,e,t):m(this,e,t)},v.prototype.makeRBT=function(e){for(var t=new Array(e),r=o.prototype._countBits(e)-1,n=0;n<e;n++)t[n]=this.revBin(n,r,e);return t},v.prototype.revBin=function(e,t,r){if(0===e||e===r-1)return e;for(var n=0,i=0;i<t;i++)n|=(1&e)<<t-i-1,e>>=1;return n},v.prototype.permute=function(e,t,r,n,i,o){for(var a=0;a<o;a++)n[a]=t[e[a]],i[a]=r[e[a]]},v.prototype.transform=function(e,t,r,n,i,o){this.permute(o,e,t,r,n,i);for(var a=1;a<i;a<<=1)for(var s=a<<1,l=Math.cos(2*Math.PI/s),c=Math.sin(2*Math.PI/s),u=0;u<i;u+=s)for(var h=l,d=c,f=0;f<a;f++){var p=r[u+f],m=n[u+f],v=r[u+f+a],g=n[u+f+a],b=h*v-d*g;g=h*g+d*v,v=b,r[u+f]=p+v,n[u+f]=m+g,r[u+f+a]=p-v,n[u+f+a]=m-g,f!==s&&(b=l*h-c*d,d=l*d+c*h,h=b)}},v.prototype.guessLen13b=function(e,t){var r=1|Math.max(t,e),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},v.prototype.conjugate=function(e,t,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=e[n];e[n]=e[r-n-1],e[r-n-1]=i,i=t[n],t[n]=-t[r-n-1],t[r-n-1]=-i}},v.prototype.normalize13b=function(e,t){for(var r=0,n=0;n<t/2;n++){var i=8192*Math.round(e[2*n+1]/t)+Math.round(e[2*n]/t)+r;e[n]=67108863&i,r=i<67108864?0:i/67108864|0}return e},v.prototype.convert13b=function(e,t,r,i){for(var o=0,a=0;a<t;a++)o+=0|e[a],r[2*a]=8191&o,o>>>=13,r[2*a+1]=8191&o,o>>>=13;for(a=2*t;a<i;++a)r[a]=0;n(0===o),n(0===(-8192&o))},v.prototype.stub=function(e){for(var t=new Array(e),r=0;r<e;r++)t[r]=0;return t},v.prototype.mulp=function(e,t,r){var n=2*this.guessLen13b(e.length,t.length),i=this.makeRBT(n),o=this.stub(n),a=new Array(n),s=new Array(n),l=new Array(n),c=new Array(n),u=new Array(n),h=new Array(n),d=r.words;d.length=n,this.convert13b(e.words,e.length,a,n),this.convert13b(t.words,t.length,c,n),this.transform(a,o,s,l,n,i),this.transform(c,o,u,h,n,i);for(var f=0;f<n;f++){var p=s[f]*u[f]-l[f]*h[f];l[f]=s[f]*h[f]+l[f]*u[f],s[f]=p}return this.conjugate(s,l,n),this.transform(s,l,d,o,n,i),this.conjugate(d,o,n),this.normalize13b(d,n),r.negative=e.negative^t.negative,r.length=e.length+t.length,r.strip()},o.prototype.mul=function(e){var t=new o(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},o.prototype.mulf=function(e){var t=new o(null);return t.words=new Array(this.length+e.length),m(this,e,t)},o.prototype.imul=function(e){return this.clone().mulTo(e,this)},o.prototype.imuln=function(e){n("number"===typeof e),n(e<67108864);for(var t=0,r=0;r<this.length;r++){var i=(0|this.words[r])*e,o=(67108863&i)+(67108863&t);t>>=26,t+=i/67108864|0,t+=o>>>26,this.words[r]=67108863&o}return 0!==t&&(this.words[r]=t,this.length++),this},o.prototype.muln=function(e){return this.clone().imuln(e)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(e){var t=function(e){for(var t=new Array(e.bitLength()),r=0;r<t.length;r++){var n=r/26|0,i=r%26;t[r]=(e.words[n]&1<<i)>>>i}return t}(e);if(0===t.length)return new o(1);for(var r=this,n=0;n<t.length&&0===t[n];n++,r=r.sqr());if(++n<t.length)for(var i=r.sqr();n<t.length;n++,i=i.sqr())0!==t[n]&&(r=r.mul(i));return r},o.prototype.iushln=function(e){n("number"===typeof e&&e>=0);var t,r=e%26,i=(e-r)/26,o=67108863>>>26-r<<26-r;if(0!==r){var a=0;for(t=0;t<this.length;t++){var s=this.words[t]&o,l=(0|this.words[t])-s<<r;this.words[t]=l|a,a=s>>>26-r}a&&(this.words[t]=a,this.length++)}if(0!==i){for(t=this.length-1;t>=0;t--)this.words[t+i]=this.words[t];for(t=0;t<i;t++)this.words[t]=0;this.length+=i}return this.strip()},o.prototype.ishln=function(e){return n(0===this.negative),this.iushln(e)},o.prototype.iushrn=function(e,t,r){var i;n("number"===typeof e&&e>=0),i=t?(t-t%26)/26:0;var o=e%26,a=Math.min((e-o)/26,this.length),s=67108863^67108863>>>o<<o,l=r;if(i-=a,i=Math.max(0,i),l){for(var c=0;c<a;c++)l.words[c]=this.words[c];l.length=a}if(0===a);else if(this.length>a)for(this.length-=a,c=0;c<this.length;c++)this.words[c]=this.words[c+a];else this.words[0]=0,this.length=1;var u=0;for(c=this.length-1;c>=0&&(0!==u||c>=i);c--){var h=0|this.words[c];this.words[c]=u<<26-o|h>>>o,u=h&s}return l&&0!==u&&(l.words[l.length++]=u),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(e,t,r){return n(0===this.negative),this.iushrn(e,t,r)},o.prototype.shln=function(e){return this.clone().ishln(e)},o.prototype.ushln=function(e){return this.clone().iushln(e)},o.prototype.shrn=function(e){return this.clone().ishrn(e)},o.prototype.ushrn=function(e){return this.clone().iushrn(e)},o.prototype.testn=function(e){n("number"===typeof e&&e>=0);var t=e%26,r=(e-t)/26,i=1<<t;return!(this.length<=r)&&!!(this.words[r]&i)},o.prototype.imaskn=function(e){n("number"===typeof e&&e>=0);var t=e%26,r=(e-t)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==t&&r++,this.length=Math.min(r,this.length),0!==t){var i=67108863^67108863>>>t<<t;this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(e){return this.clone().imaskn(e)},o.prototype.iaddn=function(e){return n("number"===typeof e),n(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},o.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},o.prototype.isubn=function(e){if(n("number"===typeof e),n(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this.strip()},o.prototype.addn=function(e){return this.clone().iaddn(e)},o.prototype.subn=function(e){return this.clone().isubn(e)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(e,t,r){var i,o,a=e.length+r;this._expand(a);var s=0;for(i=0;i<e.length;i++){o=(0|this.words[i+r])+s;var l=(0|e.words[i])*t;s=((o-=67108863&l)>>26)-(l/67108864|0),this.words[i+r]=67108863&o}for(;i<this.length-r;i++)s=(o=(0|this.words[i+r])+s)>>26,this.words[i+r]=67108863&o;if(0===s)return this.strip();for(n(-1===s),s=0,i=0;i<this.length;i++)s=(o=-(0|this.words[i])+s)>>26,this.words[i]=67108863&o;return this.negative=1,this.strip()},o.prototype._wordDiv=function(e,t){var r=(this.length,e.length),n=this.clone(),i=e,a=0|i.words[i.length-1];0!==(r=26-this._countBits(a))&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1]);var s,l=n.length-i.length;if("mod"!==t){(s=new o(null)).length=l+1,s.words=new Array(s.length);for(var c=0;c<s.length;c++)s.words[c]=0}var u=n.clone()._ishlnsubmul(i,1,l);0===u.negative&&(n=u,s&&(s.words[l]=1));for(var h=l-1;h>=0;h--){var d=67108864*(0|n.words[i.length+h])+(0|n.words[i.length+h-1]);for(d=Math.min(d/a|0,67108863),n._ishlnsubmul(i,d,h);0!==n.negative;)d--,n.negative=0,n._ishlnsubmul(i,1,h),n.isZero()||(n.negative^=1);s&&(s.words[h]=d)}return s&&s.strip(),n.strip(),"div"!==t&&0!==r&&n.iushrn(r),{div:s||null,mod:n}},o.prototype.divmod=function(e,t,r){return n(!e.isZero()),this.isZero()?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===e.negative?(s=this.neg().divmod(e,t),"mod"!==t&&(i=s.div.neg()),"div"!==t&&(a=s.mod.neg(),r&&0!==a.negative&&a.iadd(e)),{div:i,mod:a}):0===this.negative&&0!==e.negative?(s=this.divmod(e.neg(),t),"mod"!==t&&(i=s.div.neg()),{div:i,mod:s.mod}):0!==(this.negative&e.negative)?(s=this.neg().divmod(e.neg(),t),"div"!==t&&(a=s.mod.neg(),r&&0!==a.negative&&a.isub(e)),{div:s.div,mod:a}):e.length>this.length||this.cmp(e)<0?{div:new o(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new o(this.modn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new o(this.modn(e.words[0]))}:this._wordDiv(e,t);var i,a,s},o.prototype.div=function(e){return this.divmod(e,"div",!1).div},o.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},o.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},o.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,n=e.ushrn(1),i=e.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},o.prototype.modn=function(e){n(e<=67108863);for(var t=(1<<26)%e,r=0,i=this.length-1;i>=0;i--)r=(t*r+(0|this.words[i]))%e;return r},o.prototype.idivn=function(e){n(e<=67108863);for(var t=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*t;this.words[r]=i/e|0,t=i%e}return this.strip()},o.prototype.divn=function(e){return this.clone().idivn(e)},o.prototype.egcd=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i=new o(1),a=new o(0),s=new o(0),l=new o(1),c=0;t.isEven()&&r.isEven();)t.iushrn(1),r.iushrn(1),++c;for(var u=r.clone(),h=t.clone();!t.isZero();){for(var d=0,f=1;0===(t.words[0]&f)&&d<26;++d,f<<=1);if(d>0)for(t.iushrn(d);d-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(u),a.isub(h)),i.iushrn(1),a.iushrn(1);for(var p=0,m=1;0===(r.words[0]&m)&&p<26;++p,m<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(s.isOdd()||l.isOdd())&&(s.iadd(u),l.isub(h)),s.iushrn(1),l.iushrn(1);t.cmp(r)>=0?(t.isub(r),i.isub(s),a.isub(l)):(r.isub(t),s.isub(i),l.isub(a))}return{a:s,b:l,gcd:r.iushln(c)}},o.prototype._invmp=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i,a=new o(1),s=new o(0),l=r.clone();t.cmpn(1)>0&&r.cmpn(1)>0;){for(var c=0,u=1;0===(t.words[0]&u)&&c<26;++c,u<<=1);if(c>0)for(t.iushrn(c);c-- >0;)a.isOdd()&&a.iadd(l),a.iushrn(1);for(var h=0,d=1;0===(r.words[0]&d)&&h<26;++h,d<<=1);if(h>0)for(r.iushrn(h);h-- >0;)s.isOdd()&&s.iadd(l),s.iushrn(1);t.cmp(r)>=0?(t.isub(r),a.isub(s)):(r.isub(t),s.isub(a))}return(i=0===t.cmpn(1)?a:s).cmpn(0)<0&&i.iadd(e),i},o.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0,r.negative=0;for(var n=0;t.isEven()&&r.isEven();n++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=t.cmp(r);if(i<0){var o=t;t=r,r=o}else if(0===i||0===r.cmpn(1))break;t.isub(r)}return r.iushln(n)},o.prototype.invm=function(e){return this.egcd(e).a.umod(e)},o.prototype.isEven=function(){return 0===(1&this.words[0])},o.prototype.isOdd=function(){return 1===(1&this.words[0])},o.prototype.andln=function(e){return this.words[0]&e},o.prototype.bincn=function(e){n("number"===typeof e);var t=e%26,r=(e-t)/26,i=1<<t;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var o=i,a=r;0!==o&&a<this.length;a++){var s=0|this.words[a];o=(s+=o)>>>26,s&=67108863,this.words[a]=s}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(e){var t,r=e<0;if(0!==this.negative&&!r)return-1;if(0===this.negative&&r)return 1;if(this.strip(),this.length>1)t=1;else{r&&(e=-e),n(e<=67108863,"Number is too big");var i=0|this.words[0];t=i===e?0:i<e?-1:1}return 0!==this.negative?0|-t:t},o.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},o.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|e.words[r];if(n!==i){n<i?t=-1:n>i&&(t=1);break}}return t},o.prototype.gtn=function(e){return 1===this.cmpn(e)},o.prototype.gt=function(e){return 1===this.cmp(e)},o.prototype.gten=function(e){return this.cmpn(e)>=0},o.prototype.gte=function(e){return this.cmp(e)>=0},o.prototype.ltn=function(e){return-1===this.cmpn(e)},o.prototype.lt=function(e){return-1===this.cmp(e)},o.prototype.lten=function(e){return this.cmpn(e)<=0},o.prototype.lte=function(e){return this.cmp(e)<=0},o.prototype.eqn=function(e){return 0===this.cmpn(e)},o.prototype.eq=function(e){return 0===this.cmp(e)},o.red=function(e){return new _(e)},o.prototype.toRed=function(e){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(e){return this.red=e,this},o.prototype.forceRed=function(e){return n(!this.red,"Already a number in reduction context"),this._forceRed(e)},o.prototype.redAdd=function(e){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},o.prototype.redIAdd=function(e){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},o.prototype.redSub=function(e){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},o.prototype.redISub=function(e){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},o.prototype.redShl=function(e){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},o.prototype.redMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},o.prototype.redIMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(e){return n(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var g={k256:null,p224:null,p192:null,p25519:null};function b(e,t){this.name=e,this.p=new o(t,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function y(){b.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function w(){b.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function M(){b.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function E(){b.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function _(e){if("string"===typeof e){var t=o._prime(e);this.m=t.p,this.prime=t}else n(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function k(e){_.call(this,e),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}b.prototype._tmp=function(){var e=new o(null);return e.words=new Array(Math.ceil(this.n/13)),e},b.prototype.ireduce=function(e){var t,r=e;do{this.split(r,this.tmp),t=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength()}while(t>this.n);var n=t<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):void 0!==r.strip?r.strip():r._strip(),r},b.prototype.split=function(e,t){e.iushrn(this.n,0,t)},b.prototype.imulK=function(e){return e.imul(this.k)},i(y,b),y.prototype.split=function(e,t){for(var r=4194303,n=Math.min(e.length,9),i=0;i<n;i++)t.words[i]=e.words[i];if(t.length=n,e.length<=9)return e.words[0]=0,void(e.length=1);var o=e.words[9];for(t.words[t.length++]=o&r,i=10;i<e.length;i++){var a=0|e.words[i];e.words[i-10]=(a&r)<<4|o>>>22,o=a}o>>>=22,e.words[i-10]=o,0===o&&e.length>10?e.length-=10:e.length-=9},y.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var n=0|e.words[r];t+=977*n,e.words[r]=67108863&t,t=64*n+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},i(w,b),i(M,b),i(E,b),E.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var n=19*(0|e.words[r])+t,i=67108863&n;n>>>=26,e.words[r]=i,t=n}return 0!==t&&(e.words[e.length++]=t),e},o._prime=function(e){if(g[e])return g[e];var t;if("k256"===e)t=new y;else if("p224"===e)t=new w;else if("p192"===e)t=new M;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new E}return g[e]=t,t},_.prototype._verify1=function(e){n(0===e.negative,"red works only with positives"),n(e.red,"red works only with red numbers")},_.prototype._verify2=function(e,t){n(0===(e.negative|t.negative),"red works only with positives"),n(e.red&&e.red===t.red,"red works only with red numbers")},_.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):e.umod(this.m)._forceRed(this)},_.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},_.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},_.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return r.cmp(this.m)>=0&&r.isub(this.m),r},_.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},_.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return r.cmpn(0)<0&&r.iadd(this.m),r},_.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},_.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},_.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},_.prototype.isqr=function(e){return this.imul(e,e.clone())},_.prototype.sqr=function(e){return this.mul(e,e)},_.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(n(t%2===1),3===t){var r=this.m.add(new o(1)).iushrn(2);return this.pow(e,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1);n(!i.isZero());var s=new o(1).toRed(this),l=s.redNeg(),c=this.m.subn(1).iushrn(1),u=this.m.bitLength();for(u=new o(2*u*u).toRed(this);0!==this.pow(u,c).cmp(l);)u.redIAdd(l);for(var h=this.pow(u,i),d=this.pow(e,i.addn(1).iushrn(1)),f=this.pow(e,i),p=a;0!==f.cmp(s);){for(var m=f,v=0;0!==m.cmp(s);v++)m=m.redSqr();n(v<p);var g=this.pow(h,new o(1).iushln(p-v-1));d=d.redMul(g),h=g.redSqr(),f=f.redMul(h),p=v}return d},_.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},_.prototype.pow=function(e,t){if(t.isZero())return new o(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=new Array(16);r[0]=new o(1).toRed(this),r[1]=e;for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],e);var i=r[0],a=0,s=0,l=t.bitLength()%26;for(0===l&&(l=26),n=t.length-1;n>=0;n--){for(var c=t.words[n],u=l-1;u>=0;u--){var h=c>>u&1;i!==r[0]&&(i=this.sqr(i)),0!==h||0!==a?(a<<=1,a|=h,(4===++s||0===n&&0===u)&&(i=this.mul(i,r[a]),s=0,a=0)):s=0}l=26}return i},_.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},_.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},o.mont=function(e){return new k(e)},i(k,_),k.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},k.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},k.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},k.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new o(0)._forceRed(this);var r=e.mul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},k.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(e,this)}).call(this,r("LY0y")(e))},vJvq:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),i=r.n(n),o=r("vOnD"),a=r("cpGi"),s=r("7Cbv");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const c=o.d.div.withConfig({displayName:"Popper__Wrap",componentId:"sc-1jemhqi-0"})(["position:relative;display:inline-flex;"]),u=Object(o.d)(a.a).withConfig({displayName:"Popper__Content",componentId:"sc-1jemhqi-1"})(["padding:var(--default-gap) !important;border:1px solid var(--surface-border) !important;background:var(--surface-background) !important;box-shadow:var(--default-shadow) !important;border-radius:var(--surface-border-radius) !important;border:none !important;pointer-events:initial !important;"," &.show{opacity:1 !important;}&::after{display:none !important;}",""],(({appearance:e})=>"clear"===e&&Object(o.c)(["padding:0 !important;border:none !important;box-shadow:var(--default-shadow) !important;"])),(({width:e})=>e&&Object(o.c)(["width:"," !important;"],e||"auto"))),h=({body:e,appearance:t,children:r,width:n,className:o,...a})=>{const h=`popper-${Object(s.a)()}`;return i.a.createElement(c,{className:o},i.a.createElement("div",{"data-event":"click focus","data-for":h,"data-tip":!0},r),i.a.createElement(u,l({},a,{id:h,className:o,width:n,globalEventOff:"click",appearance:t}),e))};h.defaultProps={place:"top",effect:"solid",appearance:"default"},t.b=h},vNVm:function(e,t,r){"use strict";t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const r=t||!o,s=(0,n.useRef)(),[l,c]=(0,n.useState)(!1),u=(0,n.useCallback)((t=>{s.current&&(s.current(),s.current=void 0),r||l||t&&t.tagName&&(s.current=function(e,t,r){const{id:n,observer:i,elements:o}=function(e){const t=e.rootMargin||"";let r=a.get(t);if(r)return r;const n=new Map,i=new IntersectionObserver((e=>{e.forEach((e=>{const t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return a.set(t,r={id:t,observer:i,elements:n}),r}(r);return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),a.delete(n))}}(t,(e=>e&&c(e)),{rootMargin:e}))}),[r,e,l]);return(0,n.useEffect)((()=>{if(!o&&!l){const e=(0,i.requestIdleCallback)((()=>c(!0)));return()=>(0,i.cancelIdleCallback)(e)}}),[l]),[u,l]};var n=r("q1tI"),i=r("0G5g");const o="undefined"!==typeof IntersectionObserver;const a=new Map},vZ2G:function(e,t){e.exports=function(e){for(var t,r=e.length;r--;){if(255!==(t=e.readUInt8(r))){t++,e.writeUInt8(t,r);break}e.writeUInt8(0,r)}}},w8CP:function(e,t,r){"use strict";var n=r("2j6C"),i=r("P7XM");function o(e,t){return 55296===(64512&e.charCodeAt(t))&&(!(t<0||t+1>=e.length)&&56320===(64512&e.charCodeAt(t+1)))}function a(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function s(e){return 1===e.length?"0"+e:e}function l(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}t.inherits=i,t.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"===typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!==0&&(e="0"+e),i=0;i<e.length;i+=2)r.push(parseInt(e[i]+e[i+1],16))}else for(var n=0,i=0;i<e.length;i++){var a=e.charCodeAt(i);a<128?r[n++]=a:a<2048?(r[n++]=a>>6|192,r[n++]=63&a|128):o(e,i)?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++i)),r[n++]=a>>18|240,r[n++]=a>>12&63|128,r[n++]=a>>6&63|128,r[n++]=63&a|128):(r[n++]=a>>12|224,r[n++]=a>>6&63|128,r[n++]=63&a|128)}else for(i=0;i<e.length;i++)r[i]=0|e[i];return r},t.toHex=function(e){for(var t="",r=0;r<e.length;r++)t+=s(e[r].toString(16));return t},t.htonl=a,t.toHex32=function(e,t){for(var r="",n=0;n<e.length;n++){var i=e[n];"little"===t&&(i=a(i)),r+=l(i.toString(16))}return r},t.zero2=s,t.zero8=l,t.join32=function(e,t,r,i){var o=r-t;n(o%4===0);for(var a=new Array(o/4),s=0,l=t;s<a.length;s++,l+=4){var c;c="big"===i?e[l]<<24|e[l+1]<<16|e[l+2]<<8|e[l+3]:e[l+3]<<24|e[l+2]<<16|e[l+1]<<8|e[l],a[s]=c>>>0}return a},t.split32=function(e,t){for(var r=new Array(4*e.length),n=0,i=0;n<e.length;n++,i+=4){var o=e[n];"big"===t?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=255&o):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,r[i+1]=o>>>8&255,r[i]=255&o)}return r},t.rotr32=function(e,t){return e>>>t|e<<32-t},t.rotl32=function(e,t){return e<<t|e>>>32-t},t.sum32=function(e,t){return e+t>>>0},t.sum32_3=function(e,t,r){return e+t+r>>>0},t.sum32_4=function(e,t,r,n){return e+t+r+n>>>0},t.sum32_5=function(e,t,r,n,i){return e+t+r+n+i>>>0},t.sum64=function(e,t,r,n){var i=e[t],o=n+e[t+1]>>>0,a=(o<n?1:0)+r+i;e[t]=a>>>0,e[t+1]=o},t.sum64_hi=function(e,t,r,n){return(t+n>>>0<t?1:0)+e+r>>>0},t.sum64_lo=function(e,t,r,n){return t+n>>>0},t.sum64_4_hi=function(e,t,r,n,i,o,a,s){var l=0,c=t;return l+=(c=c+n>>>0)<t?1:0,l+=(c=c+o>>>0)<o?1:0,e+r+i+a+(l+=(c=c+s>>>0)<s?1:0)>>>0},t.sum64_4_lo=function(e,t,r,n,i,o,a,s){return t+n+o+s>>>0},t.sum64_5_hi=function(e,t,r,n,i,o,a,s,l,c){var u=0,h=t;return u+=(h=h+n>>>0)<t?1:0,u+=(h=h+o>>>0)<o?1:0,u+=(h=h+s>>>0)<s?1:0,e+r+i+a+l+(u+=(h=h+c>>>0)<c?1:0)>>>0},t.sum64_5_lo=function(e,t,r,n,i,o,a,s,l,c){return t+n+o+s+c>>>0},t.rotr64_hi=function(e,t,r){return(t<<32-r|e>>>r)>>>0},t.rotr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0},t.shr64_hi=function(e,t,r){return e>>>r},t.shr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0}},wOhW:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),o=r("g4pe"),a=r.n(o),s=r("20a2"),l=r("VX74"),c=r("/MKj"),u=r("vOnD"),h=r("8CDE"),d=r("nShV"),f=r("hYBG"),p=r("QUga"),m=r("ZeZO"),v=r("feIE");const g=(e,t)=>"success"===e?"color"===t?"green":"icon"===t?"check":"var(--default-color-green)":"warning"===e?"color"===t?"orange":"icon"===t?"danger":"var(--default-color-orange)":"color"===t?"red":"icon"===t?"danger":"var(--default-color-red)",b=Object(u.d)(d.b).withConfig({displayName:"Snack__Wrap",componentId:"gn7jzf-0"})(["align-items:center;justify-content:space-between;width:320px;cursor:pointer;background:white;border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);padding:var(--default-gap) calc(var(--default-gap) + 5px);transition:opacity 150ms ease;"," &:hover{opacity:0.85;}","{color:white;}&.fade-enter{opacity:0;}&.fade-enter-active{opacity:1;transition:opacity 100ms,blur 100ms;}&.fade-exit{opacity:1;}&.fade-exit-active{opacity:0;transition:opacity 100ms,blur 100ms;}"],(({type:e})=>e&&Object(u.c)(["background:",";"],g(e))),p.a),y=Object(u.d)(m.a).withConfig({displayName:"Snack__MarkButton",componentId:"gn7jzf-1"})(["background:white;border-radius:50%;border:none;&:hover{background:white;border:none;}"]);var w=({type:e,message:t,style:r,className:n,onRemove:o})=>i.a.createElement(f.a,{in:!0,appear:!0,animation:"fade"},i.a.createElement(b,{type:e,className:n,style:r,onClick:o},i.a.createElement(p.b,null,t),i.a.createElement(y,{kind:"icon",size:"xs"},i.a.createElement(v.a,{icon:g(e,"icon"),stroke:g(e),size:"xs"}))));const M=Object(u.d)(h.a).withConfig({displayName:"Snacks__Wrap",componentId:"sc-38coyi-0"})(["position:fixed;left:calc(50% - 185px);bottom:0;z-index:var(--z-override);padding:25px;max-height:768px;overflow-y:auto;"]),E=({snacks:e,onRemove:t})=>{const[r,o]=Object(n.useState)([]);return i.a.createElement(M,null,(e||r).map((e=>i.a.createElement(w,{key:e.id,type:e.type,message:e.message,onRemove:()=>(e=>{t&&t(e),o((t=>t.filter((t=>t.id!==e.id))))})(e)}))))};E.defaultProps={snacks:[]};var _=E,k=r("auMy"),O=r("RKiZ"),j=r("7sPp");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const S=100;function C(e){return e&&0!==e.length?e[e.length-1]:null}const A=u.d.div.withConfig({displayName:"Modal__Wrap",componentId:"sdkjxs-0"})(["display:flex;justify-content:center;align-items:flex-start;position:fixed;top:0;left:0;width:100%;height:100%;z-index:var(--z-override);overflow:auto;&.fade-enter{opacity:0;}&.fade-enter-active{opacity:1;transition:opacity 100ms,blur 100ms;}&.fade-exit{opacity:1;}&.fade-exit-active{opacity:0;transition:opacity 100ms,blur 100ms;}"]),I=u.d.div.withConfig({displayName:"Modal__Overlay",componentId:"sdkjxs-1"})(["position:fixed;top:0;left:0;width:100%;height:100%;z-index:var(--z-100);background:var(--default-color-overlay);cursor:pointer;"]),P=u.d.div.withConfig({displayName:"Modal__Content",componentId:"sdkjxs-2"})(["position:relative;top:15%;left:0;right:0;z-index:var(--z-101);min-width:480px;max-width:80%;width:min-content;margin-block-end:150px;background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);&.swing-enter{opacity:0;transform:scale(0.9);}&.swing-enter-active{opacity:1;transform:translateX(0);transition:opacity 100ms,transform 100ms;}&.swing-exit{opacity:1;}&.swing-exit-active{opacity:0;transform:scale(0.9);transition:opacity 100ms,transform 100ms;}"," @media only screen and (max-width:768px){min-width:320px;}@media only screen and (max-width:480px){min-width:285px;max-width:100%;width:auto;margin:0 var(--default-gap);}"],(({size:e})=>"l"===e&&Object(u.c)(["top:5%;min-width:65%;"]))),T=u.d.div.withConfig({displayName:"Modal__Headline",componentId:"sdkjxs-3"})(["position:relative;display:flex;border-bottom:var(--default-border);padding:var(--default-gap);line-height:1;"]),R=Object(u.d)(m.a).withConfig({displayName:"Modal__BackButton",componentId:"sdkjxs-4"})(["position:absolute;top:0;left:10px;height:100%;"]),L=Object(u.d)(j.a).withConfig({displayName:"Modal__StyledTitle",componentId:"sdkjxs-5"})(["text-align:center;width:100%;@media only screen and (max-width:480px){font-size:var(--font-size-l);}"]),N=e=>{const t=e.children;if(!t)return null;const r=e.path;let n=null;for(const i of t)if(r===i.props.path){n=i;break}return n},D=({component:e,close:t,back:r,jump:n})=>{const o=e;return i.a.createElement(o,{close:t,back:r,jump:n})},U=({size:e,routes:t,closeByBackground:r,onHide:o})=>{const[a,s]=Object(n.useState)(["/"]),[l,c]=Object(n.useState)(!1),[u,h]=Object(n.useState)(null),d={fade:{in:!!t,animation:"fade",onEnter:()=>c(!0),onExited:()=>c(!1),timeout:S},swing:{in:l,animation:"swing",timeout:S}},p=()=>{var e;return(null===t||void 0===t||null===(e=t.find((e=>function(e){return e.path===C(a)}(e))))||void 0===e?void 0:e.title)||""},m=()=>{h("slideOutRight"),setTimeout((()=>{s([...a.filter(((e,t)=>t!==a.length-1))]),h("slideInLeft")}),S)},g=e=>{h("slideOutLeft"),setTimeout((()=>{s([...a,e]),h("slideInRight")}),S)},b=()=>{c(!1),h(null),setTimeout((()=>{s(["/"]),o()}),S)};return Object(n.useEffect)((()=>{if(t&&t.length>0){const e=t.find((e=>e.home));s([(null===e||void 0===e?void 0:e.path)||"/"])}}),[t]),i.a.createElement(f.a,d.fade,i.a.createElement(A,null,i.a.createElement(I,{className:r?"":"clear",onClick:r?b:()=>{}}),i.a.createElement(f.a,d.swing,i.a.createElement(P,{className:"animate"+(u?` ${u}`:""),size:e},p()&&i.a.createElement(T,null,a.length>1&&(()=>{const e={back:!0},r=a[a.length-1],n=t.find((e=>e.path===r));var i;return n&&null!==(i=null===n||void 0===n?void 0:n.back)&&void 0!==i?i:e})().back&&i.a.createElement(R,{onClick:m,appearance:"clear"},i.a.createElement(v.a,{icon:"arrowLeft"})),i.a.createElement(L,{tag:"h3"},p())),i.a.createElement(N,{path:C(a)},(t||[]).map(((e,t)=>i.a.createElement(D,x({key:t},e,{close:b,back:m,jump:g})))))))))};U.defaultProps={title:"Modal Title",routes:[],onHide:()=>{},closeByBackground:!0};var z=U,B=r("wOnQ"),F=r.n(B),V=r("i680"),q=r("DTT8"),H=r("k82f"),W=r.n(H);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const G=u.d.div.withConfig({displayName:"Drawer__Overlay",componentId:"j212s2-0"})(["position:absolute;top:0;left:0;width:100%;height:100%;background:var(--default-color-overlay);transition:opacity 0.2s;"]),Z=u.d.div.withConfig({displayName:"Drawer__Side",componentId:"j212s2-1"})(["position:relative;display:flex;justify-content:center;margin-left:auto;max-width:70%;height:100vh;background:white;transition:transform 0.3s;@media only screen and (max-width:1098px){width:calc(100% - 60px);max-width:100%;","}@media only screen and (max-width:480px){width:100%;max-width:100%;","}",""],(({half:e})=>e&&Object(u.c)(["width:196px;"])),(({half:e})=>e&&Object(u.c)(["width:196px;"])),(({half:e})=>e&&Object(u.c)(["width:196px;margin-left:0;"]))),K=Object(u.d)(v.a).withConfig({displayName:"Drawer__BackButton",componentId:"j212s2-2"})(["position:absolute;top:40px;right:calc(100% + 30px);z-index:var(--z-15);width:40px;cursor:pointer;transform:translateY(-50%);transition:opacity 0.3s;@media only screen and (max-width:1098px){right:calc(100% + 12px);}@media only screen and (max-width:480px){display:none;}"]),Y=u.d.div.withConfig({displayName:"Drawer__Content",componentId:"j212s2-3"})(["display:flex;flex-direction:column;padding:var(--default-gap);min-height:100%;"]),Q=u.d.div.withConfig({displayName:"Drawer__Wrapper",componentId:"j212s2-4"})(["position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;&.slide-left-enter,&.slide-left-appear{","{opacity:0;}","{transform:translateX(-100%);}","{opacity:0;}}&.slide-left-enter-active,&.slide-left-appear-active{","{opacity:1;}","{transform:initial;transition-delay:150ms;}","{opacity:1;}}&.slide-left-exit{","{opacity:1;}","{transform:initial;}","{opacity:1;}}&.slide-left-exit-active{","{opacity:0;}","{transform:translateX(-100%);}","{opacity:0;}}&.slide-right-enter,&.slide-right-appear{","{opacity:0;}","{transform:translateX(100%);}","{opacity:0;}}&.slide-right-enter-active,&.slide-right-appear-active{","{opacity:1;}","{transform:initial;transition-delay:150ms;}","{opacity:1;}}&.slide-right-exit{","{opacity:1;}","{transform:initial;}","{opacity:1;}}&.slide-right-exit-active{","{opacity:0;}","{transform:translateX(100%);}","{opacity:0;}}"],G,Z,K,G,Z,K,G,Z,K,G,Z,K,G,Z,K,G,Z,K,G,Z,K,G,Z,K),X=u.d.div.withConfig({displayName:"Drawer__Loader",componentId:"j212s2-5"})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;flex-grow:1;"]);var J=({children:e,side:t,half:r,isOpen:o,onBack:a,...s})=>i.a.createElement(f.a,$({in:o,timeout:{appear:500,enter:500,exit:300},animation:"right"===t?"slide-right":"slide-left",unmountOnExit:!0,appear:!0},s),i.a.createElement(Q,s,i.a.createElement(G,{onClick:a}),i.a.createElement(Z,{half:r},i.a.createElement(K,{onClick:a,icon:"arrowLeft",size:64,stroke:"white"}),i.a.createElement(W.a,null,i.a.createElement(Y,null,i.a.createElement(n.Suspense,{fallback:i.a.createElement(X,null,i.a.createElement(k.a,null))},e)))))),ee=r("VWQm"),te=r("Ztxg");const re=Object(u.d)(J).withConfig({displayName:"Drawer__Wrap",componentId:"sc-15dabmr-0"})([""]),ne=u.d.img.withConfig({displayName:"Drawer__BrandLogo",componentId:"sc-15dabmr-1"})(["object-fit:contain;width:100%;height:100%;"]),ie=Object(u.d)(h.a).withConfig({displayName:"Drawer__Container",componentId:"sc-15dabmr-2"})(["height:100%;flex-grow:1;&.fade-enter{opacity:0;}&.fade-enter-active{opacity:1;transition:opacity 100ms,blur 100ms;}&.fade-exit{opacity:1;}&.fade-exit-active{opacity:0;transition:opacity 100ms,blur 100ms;}"]),oe=Object(u.d)(d.b).withConfig({displayName:"Drawer__Header",componentId:"sc-15dabmr-3"})(["display:flex;justify-content:space-between;grid-gap:var(--default-gap);"]),ae=u.d.div.withConfig({displayName:"Drawer__Content",componentId:"sc-15dabmr-4"})(["display:flex;flex-direction:column;flex-grow:1;"]),se=Object(u.d)(m.a).withConfig({displayName:"Drawer__BackButton",componentId:"sc-15dabmr-5"})(["display:none;@media only screen and (max-width:480px){display:flex;justify-content:center;align-items:center;}"]);var le=()=>{var e;const t=Object(s.useRouter)(),{root:r,drawer:o}=Object(c.c)((e=>e)),a=Object(c.b)(),[l,u]=Object(n.useState)(!1),h=Object(n.useRef)(null),f=async()=>{await t.push({pathname:t.pathname,query:{}},void 0,{shallow:!0}),a(Object(te.a)(null))};return i.a.createElement(re,{key:o.history.length,side:o.side,half:o.half,isOpen:o.open,onBack:f},i.a.createElement(ie,null,i.a.createElement(oe,null,i.a.createElement(d.b,null,"left"===o.side&&o.half?i.a.createElement(m.a,{appearance:"clear",onClick:()=>t.push("/")},i.a.createElement(ne,{src:null===(e=r.settings.general.logotype)||void 0===e?void 0:e.path,alt:"Logotype"})):i.a.createElement(se,{size:"s",kind:"icon",onClick:f,revert:!0},i.a.createElement(v.a,{icon:"arrowLeft",size:"s",stroke:"var(--default-color-accent)"})),o.title&&i.a.createElement(q.d,{color:o.color,icon:o.icon,text:o.title})),o.pdfName&&i.a.createElement(d.b,null,i.a.createElement(ee.b,{text:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0432 PDF"},i.a.createElement(m.a,{size:"s",kind:"icon",appearance:"clear",disabled:l,onClick:()=>{u(!0),F()(h.current).then((e=>{const[t,r]=[6,6],n=e.toDataURL("image/png",1),i=new V.a("p","px","a4"),a=i.internal.pageSize.getWidth(),s=i.internal.pageSize.getHeight(),l=a/e.width,c=s/e.height,h=l>c?c:l;i.addImage(n,"PNG",t,r,e.width*h-2*t,e.height*h-2*t),i.save(`${o.pdfName}.pdf`),u(!1)}))}},i.a.createElement(v.a,{icon:"scan",size:"s",stroke:"var(--ghost-color-text)"}))))),o.title&&i.a.createElement(O.a,{clear:!0}),i.a.createElement(ae,{ref:h},o.content)))},ce=r("586Q"),ue=r("8UhZ"),he=r("9Xo6"),de=r("Sza6"),fe=r("qOKH"),pe=r("8ihE"),me=r("u2Cb"),ve=r("rOcY");const ge=Object(u.d)(m.a).withConfig({displayName:"main__GuideButton",componentId:"r90a11-0"})(["display:flex;justify-content:center;align-items:center;color:var(--default-color-accent);"]),be=({close:e})=>{const t=Object(s.useRouter)();return i.a.createElement(h.a,{style:{padding:"15px"}},i.a.createElement(p.b,null,"Atomic - \u0441\u0432\u043e\u0435\u043e\u0431\u0440\u0430\u0437\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044f\u043c\u0438 \u0438\u043d\u0434\u0443\u0441\u0442\u0440\u0438\u0438. \u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0438 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u043e\u0432, \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0442\u044c \u0438\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u044b \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u043e\u0431\u0449\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u0438 \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u043d\u0430 \u043b\u044e\u0431\u044b\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430\u0445."),i.a.createElement(m.a,{onClick:e},"\u0412\u043f\u0435\u0440\u0435\u0434!"),i.a.createElement(O.a,{clear:!0}),i.a.createElement(ge,{onClick:()=>(e(),t.push("/guide")),appearance:"clear"},"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"))},ye=({mutation:e,variables:t,callback:r})=>{const[i]=Object(l.useMutation)(e),o=Object(c.b)();return Object(n.useEffect)((()=>{(async function(){const e=await i({variables:t});o(Object(de.n)(null,null)),r&&await r(e)})().then()}),[i,o,t,r]),null};t.a=({children:e})=>{const t=Object(s.useRouter)(),{useDetectQuery:r}=Object(ue.a)(),[o,{data:u,loading:h}]=Object(l.useLazyQuery)(me.a.GET_USER),{data:d,loading:f}=Object(l.useQuery)(me.a.GET_META),{root:p,user:m,snacks:v,modal:g}=Object(c.c)((e=>e)),b=Object(c.b)();return Object(n.useEffect)((()=>{!f&&null!==d&&void 0!==d&&d.getDashboardSettings&&b(Object(de.t)(null===d||void 0===d?void 0:d.getDashboardSettings))}),[d,f]),Object(n.useEffect)((()=>{(null===v||void 0===v?void 0:v.length)>0&&setTimeout((()=>b(Object(he.a)())),3e3)}),[v]),Object(n.useEffect)((()=>{localStorage.getItem(ve.a.get("secret"))&&o()}),[]),Object(n.useEffect)((()=>{u&&u.getUser&&b(Object(pe.c)(u.getUser))}),[u,b]),Object(n.useEffect)((()=>{m.authenticated&&m.register&&b(Object(fe.a)([{path:"/",title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",component:({close:e})=>i.a.createElement(be,{close:e})}]))}),[m,b]),Object(n.useEffect)((()=>{b(Object(de.s)(t.query.search))}),[t,b]),r(),i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,null,i.a.createElement("title",null,p.settings.meta.title),i.a.createElement("meta",{name:"description",content:p.settings.meta.description})),h?i.a.createElement(ce.b,null,i.a.createElement(k.a,null)):e,i.a.createElement(le,null),i.a.createElement(_,{snacks:v,onRemove:e=>b(Object(he.b)(e.id))}),i.a.createElement(z,{size:null===g||void 0===g?void 0:g.size,routes:null===g||void 0===g?void 0:g.routes,onHide:()=>{b(Object(fe.a)(null))}}),p.mutation&&i.a.createElement(ye,{mutation:p.mutation,variables:p.variables,callback:p.callback}))}},wRn4:function(e,t,r){var n=r("jIre");t.encrypt=function(e,t){var r=n(t,e._prev);return e._prev=e._cipher.encryptBlock(r),e._prev},t.decrypt=function(e,t){var r=e._prev;e._prev=t;var i=e._cipher.decryptBlock(t);return n(i,r)}},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},wZgm:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),o=r("vOnD");const a=(e,t)=>{const r=new Date(e,t,1),n=[],i=r.getDay();let o=0;for(o=0===i?6:i-1;o>0;)n.push(null),o-=1;for(;r.getMonth()===t;)n.push(new Date(r)),r.setDate(r.getDate()+1);return n},s=e=>0!==e.getDay()&&6!==e.getDay(),l=e=>e&&new Date(e)||null,c=e=>{var t;return e&&(null===(t=new Date(e))||void 0===t?void 0:t.toLocaleDateString())||null};var u=e=>{const t=Object(n.useRef)(null),r=Object(n.useCallback)((r=>{t.current&&!t.current.contains(r.target)&&e()}),[t,e]);return Object(n.useEffect)((()=>(window.addEventListener("click",r),()=>{window.removeEventListener("click",r)})),[r]),[t]},h=r("hYBG"),d=r("7Cbv"),f=r("8Esz");const p=o.d.div.withConfig({displayName:"DateDay__Wrap",componentId:"mpq3gr-0"})(["--cell-size:35px;--cell-offset:2.5px;--cell-color:#fff;--badge-size:5px;--badge-bottom-offset:2px;--side-left-radius:10rem 0 0 10rem;--side-right-radius:0 10rem 10rem 0;--transition:all 150ms ease;display:flex;align-items:center;align-self:center;justify-content:center;width:var(--cell-size);height:var(--cell-size);margin:var(--cell-offset) 0;cursor:pointer;user-select:none;border:none;outline:none;transition:var(--transition);justify-self:center;span{position:relative;display:flex;align-items:center;justify-content:center;width:var(--cell-size);height:var(--cell-size);font-size:var(--font-size-s);font-weight:400;color:var(--default-color-text);border-radius:50%;transition:var(--transition);i{position:absolute;bottom:var(--badge-bottom-offset);width:var(--badge-size);height:var(--badge-size);background:var(--default-color-text);border-radius:50%;}"," ","}"],(({current:e})=>e&&Object(o.c)(["color:var(--default-color-accent);background:transparent;border:1px solid var(--default-color-accent);i{display:none;}"])),(({selected:e})=>e&&Object(o.c)(["color:var(--cell-color);background:var(--default-color-accent);i{background:var(--cell-color);}"])));var m=({value:e,selectedDate:t,withMarkers:r,onCompare:n,onChange:o})=>{const[a,s,l]=[e.getDate(),e.getMonth(),e.getFullYear()],[c,u,h]=[(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear()],d=t&&t&&((e,t)=>{const r=new Date(e);r.setHours(0,0,0,0);const n=new Date(t);return n.setHours(0,0,0,0),new Date(r).getTime()===new Date(n).getTime()})(e,t),f=c===a&&u===s&&h===l;return i.a.createElement(p,{role:"button",tabIndex:0,onMouseDown:o,selected:d,current:f},i.a.createElement("span",null,e.getDate(),r&&n(e)&&i.a.createElement("i",null)))};const v=o.d.div.withConfig({displayName:"DateMonth__Wrap",componentId:"gn4ak8-0"})(["display:flex;flex-direction:column;width:252px;"]),g=o.d.div.withConfig({displayName:"DateMonth__MonthLabel",componentId:"gn4ak8-1"})(["display:flex;align-items:center;margin-bottom:20px;font-weight:700;text-transform:uppercase;user-select:none;"]),b=o.d.div.withConfig({displayName:"DateMonth__Headers",componentId:"gn4ak8-2"})(["display:grid;align-content:center;justify-content:center;margin-bottom:10px;user-select:none;grid-template-columns:repeat(auto-fit,minmax(35px,35px));"]),y=o.d.div.withConfig({displayName:"DateMonth__Header",componentId:"gn4ak8-3"})(["align-self:center;font-size:var(--size-text-xs);font-weight:500;color:var(--ghost-color-text);text-transform:uppercase;justify-self:center;"]),w=o.d.div.withConfig({displayName:"DateMonth__Days",componentId:"gn4ak8-4"})(["display:grid;align-content:center;justify-content:center;grid-template-columns:repeat(auto-fit,minmax(35px,35px));"]),M=o.d.div.withConfig({displayName:"DateMonth__Day",componentId:"gn4ak8-5"})([""]);var E=Object(n.memo)((({lang:e,month:t,value:r,filterDate:o,setFilterDate:a,withNavigate:s,withMarkers:l,withYearDisplay:c,onCompare:u,onChange:h})=>{const p=Object(n.useMemo)((()=>((e,t)=>new Array(7).fill(null).map(((e,t)=>new Date((new Date).getFullYear(),0,t-1))).map((r=>r.toLocaleDateString(e,{weekday:t}))))(e,"short")),[e]);return i.a.createElement(v,null,s?i.a.createElement(f.a,{label:i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,t.label),c&&i.a.createElement("span",null,o.getFullYear())),defaultValue:o,onChange:e=>a(new Date(o.getFullYear(),o.getMonth()+e))}):i.a.createElement(g,null,t.label,c&&r&&i.a.createElement("span",null,new Date(r).getFullYear())),i.a.createElement(b,null,p.map((e=>i.a.createElement(y,{key:Object(d.a)()},e)))),i.a.createElement(w,null,t.days.map((e=>e?i.a.createElement(m,{key:Object(d.a)(),value:e,selectedDate:r,withMarkers:l,onCompare:u,onChange:()=>h(e)}):i.a.createElement(M,{key:Object(d.a)()})))))})),_=r("RKiZ"),k=r("Gliw");const O=o.d.div.withConfig({displayName:"DateSheet__Wrap",componentId:"sc-1heh40m-0"})(["display:flex;flex-wrap:wrap;grid-gap:20px;"]),j=(new Date).getFullYear();var x=({lang:e,value:t,style:r,sheets:o,className:c,canEditYear:u,withMarkers:h,withNavigate:f,withYearDisplay:p,onCompare:m,onChange:v})=>{const g=l(t),[b,y]=Object(n.useState)([]),[w,M]=Object(n.useState)(new Date);return Object(n.useEffect)((()=>{y(new Array(o||1).fill(null).map(((t,r)=>{const n=new Date(w),i=new Date(n.getFullYear(),n.getMonth()+r),o=i.getMonth();return{label:i.toLocaleString(e,{month:"long"}),days:a(i.getFullYear(),o)}})))}),[w,o,e]),i.a.createElement(O,{className:c,style:r},u&&i.a.createElement(k.a,{type:"number",name:"year",defaultValue:g&&g.getFullYear()||j,onChange:e=>M(new Date(e.target.value,w.getMonth(),w.getDate())),horizontalAlignment:"center",placeholder:j,appearance:"ghost",min:1920,max:2100,required:!0}),u&&i.a.createElement(_.a,{clear:!0}),b.map((t=>i.a.createElement(E,{key:Object(d.a)(),value:g,lang:e,month:t,filterDate:w,setFilterDate:M,withNavigate:!!f,withMarkers:null===h||void 0===h||h,withYearDisplay:null!==p&&void 0!==p?p:1===b.length,onCompare:m||s,onChange:v}))))},S=r("feIE");const C=o.d.div.withConfig({displayName:"DatePicker__Wrap",componentId:"iku3jj-0"})(["position:relative;display:flex;flex-grow:1;"]),A=o.d.div.withConfig({displayName:"DatePicker__TextField",componentId:"iku3jj-1"})(["position:relative;flex-grow:1;"]),I=Object(o.d)(h.a).withConfig({displayName:"DatePicker__Popout",componentId:"iku3jj-2"})(["position:absolute;top:calc(var(--input-height-m) + 10px);left:0;z-index:15;padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--default-shadow);&.fade-enter{opacity:0;}&.fade-enter-active{opacity:1;transition:opacity 100ms,blur 100ms;}&.fade-exit{opacity:1;}&.fade-exit-active{opacity:0;transition:opacity 100ms,blur 100ms;}"]),P=Object(o.d)(S.a).withConfig({displayName:"DatePicker__DateIcon",componentId:"iku3jj-3"})(["position:absolute;top:9px;right:10px;",""],(({onClick:e})=>e&&Object(o.c)(["cursor:pointer;&:hover{opacity:0.45;}"])));t.a=({id:e,name:t,style:r,sheets:o,inputRef:a,placeholder:s,value:h=null,className:d,appearance:f,canEditYear:p,withNavigate:m,withMarkers:v,withYearDisplay:g,onChange:b,onCompare:y})=>{const[w,M]=Object(n.useState)(!1),[E,_]=Object(n.useState)(l(h)),[O]=u((()=>M(!1))),j=e=>{_(e),b&&b(e)};return i.a.createElement(C,{ref:O,className:d,style:r},i.a.createElement(A,{onClick:()=>{M(!w)},className:d,style:r},i.a.createElement(k.a,{id:e,name:t,type:"text",inputRef:null!==a&&void 0!==a?a:null,defaultValue:c(E),placeholder:s||"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",appearance:f,readOnly:!0}),i.a.createElement(P,{size:"xs",stroke:"var(--ghost-color-text)",icon:E?"delete":"calendar",onClick:E&&(()=>j(null))})),i.a.createElement(I,{in:w,animation:"fade",timeout:100},i.a.createElement(x,{value:E,sheets:o,style:{width:282},canEditYear:p,withNavigate:m,withMarkers:v,withYearDisplay:g,onChange:j,onCompare:y})))}},wk3p:function(e){e.exports=JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}')},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},x7x7:function(e,t,r){"use strict";(function(t){var n=r("lm0R");function i(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,r){var n=e.entry;e.entry=null;for(;n;){var i=n.callback;t.pendingcb--,i(r),n=n.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}(t,e)}}e.exports=v;var o,a=n.nextTick;v.WritableState=m;var s=Object.create(r("Onz0"));s.inherits=r("bUU7");var l={deprecate:r("t9FE")},c=r("LTzE"),u=r("IeKR").Buffer,h=t.Uint8Array||function(){};var d,f=r("LNCm");function p(){}function m(e,t){o=o||r("qDKX"),e=e||{};var s=t instanceof o;this.objectMode=!!e.objectMode,s&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var l=e.highWaterMark,c=e.writableHighWaterMark,u=this.objectMode?16:16384;this.highWaterMark=l||0===l?l:s&&(c||0===c)?c:u,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var h=!1===e.decodeStrings;this.decodeStrings=!h,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var r=e._writableState,i=r.sync,o=r.writecb;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(r),t)!function(e,t,r,i,o){--t.pendingcb,r?(n.nextTick(o,i),n.nextTick(E,e,t),e._writableState.errorEmitted=!0,e.emit("error",i)):(o(i),e._writableState.errorEmitted=!0,e.emit("error",i),E(e,t))}(e,r,i,t,o);else{var s=w(r);s||r.corked||r.bufferProcessing||!r.bufferedRequest||y(e,r),i?a(b,e,r,s,o):b(e,r,s,o)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new i(this)}function v(e){if(o=o||r("qDKX"),!d.call(v,this)&&!(this instanceof o))return new v(e);this._writableState=new m(e,this),this.writable=!0,e&&("function"===typeof e.write&&(this._write=e.write),"function"===typeof e.writev&&(this._writev=e.writev),"function"===typeof e.destroy&&(this._destroy=e.destroy),"function"===typeof e.final&&(this._final=e.final)),c.call(this)}function g(e,t,r,n,i,o,a){t.writelen=n,t.writecb=a,t.writing=!0,t.sync=!0,r?e._writev(i,t.onwrite):e._write(i,o,t.onwrite),t.sync=!1}function b(e,t,r,n){r||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,n(),E(e,t)}function y(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount,o=new Array(n),a=t.corkedRequestsFree;a.entry=r;for(var s=0,l=!0;r;)o[s]=r,r.isBuf||(l=!1),r=r.next,s+=1;o.allBuffers=l,g(e,t,!0,t.length,o,"",a.finish),t.pendingcb++,t.lastBufferedRequest=null,a.next?(t.corkedRequestsFree=a.next,a.next=null):t.corkedRequestsFree=new i(t),t.bufferedRequestCount=0}else{for(;r;){var c=r.chunk,u=r.encoding,h=r.callback;if(g(e,t,!1,t.objectMode?1:c.length,c,u,h),r=r.next,t.bufferedRequestCount--,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequest=r,t.bufferProcessing=!1}function w(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function M(e,t){e._final((function(r){t.pendingcb--,r&&e.emit("error",r),t.prefinished=!0,e.emit("prefinish"),E(e,t)}))}function E(e,t){var r=w(t);return r&&(!function(e,t){t.prefinished||t.finalCalled||("function"===typeof e._final?(t.pendingcb++,t.finalCalled=!0,n.nextTick(M,e,t)):(t.prefinished=!0,e.emit("prefinish")))}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"))),r}s.inherits(v,c),m.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(m.prototype,"buffer",{get:l.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"===typeof Symbol&&Symbol.hasInstance&&"function"===typeof Function.prototype[Symbol.hasInstance]?(d=Function.prototype[Symbol.hasInstance],Object.defineProperty(v,Symbol.hasInstance,{value:function(e){return!!d.call(this,e)||this===v&&(e&&e._writableState instanceof m)}})):d=function(e){return e instanceof this},v.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},v.prototype.write=function(e,t,r){var i,o=this._writableState,a=!1,s=!o.objectMode&&(i=e,u.isBuffer(i)||i instanceof h);return s&&!u.isBuffer(e)&&(e=function(e){return u.from(e)}(e)),"function"===typeof t&&(r=t,t=null),s?t="buffer":t||(t=o.defaultEncoding),"function"!==typeof r&&(r=p),o.ended?function(e,t){var r=new Error("write after end");e.emit("error",r),n.nextTick(t,r)}(this,r):(s||function(e,t,r,i){var o=!0,a=!1;return null===r?a=new TypeError("May not write null values to stream"):"string"===typeof r||void 0===r||t.objectMode||(a=new TypeError("Invalid non-string/buffer chunk")),a&&(e.emit("error",a),n.nextTick(i,a),o=!1),o}(this,o,e,r))&&(o.pendingcb++,a=function(e,t,r,n,i,o){if(!r){var a=function(e,t,r){e.objectMode||!1===e.decodeStrings||"string"!==typeof t||(t=u.from(t,r));return t}(t,n,i);n!==a&&(r=!0,i="buffer",n=a)}var s=t.objectMode?1:n.length;t.length+=s;var l=t.length<t.highWaterMark;l||(t.needDrain=!0);if(t.writing||t.corked){var c=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:o,next:null},c?c.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else g(e,t,!1,s,n,i,o);return l}(this,o,s,e,t,r)),a},v.prototype.cork=function(){this._writableState.corked++},v.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||y(this,e))},v.prototype.setDefaultEncoding=function(e){if("string"===typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(v.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),v.prototype._write=function(e,t,r){r(new Error("_write() is not implemented"))},v.prototype._writev=null,v.prototype.end=function(e,t,r){var i=this._writableState;"function"===typeof e?(r=e,e=null,t=null):"function"===typeof t&&(r=t,t=null),null!==e&&void 0!==e&&this.write(e,t),i.corked&&(i.corked=1,this.uncork()),i.ending||i.finished||function(e,t,r){t.ending=!0,E(e,t),r&&(t.finished?n.nextTick(r):e.once("finish",r));t.ended=!0,e.writable=!1}(this,i,r)},Object.defineProperty(v.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),v.prototype.destroy=f.destroy,v.prototype._undestroy=f.undestroy,v.prototype._destroy=function(e,t){this.end(),t(e)}}).call(this,r("ntbh"))},xAqQ:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),o=r("nShV"),a=r("ZeZO"),s=r("qoM+"),l=r("2qQv");t.a=({children:e,mutation:t,appearance:r,className:n,onCancel:c,onSubmit:u})=>i.a.createElement(s.b,{className:n,appearance:r,mutation:t,onSubmit:u},(({loading:t,error:r})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{data:e,loading:t,error:r,errorMessage:"\u0423\u043f\u0441! \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442",emptyMessage:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f"},e,i.a.createElement(o.b,null,i.a.createElement(a.a,{type:"button",style:{flexGrow:1},onClick:c},"\u041e\u0442\u043c\u0435\u043d\u0430"),i.a.createElement(a.a,{type:"submit",disabled:t,appearance:"red",style:{flexGrow:1}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))))},xEkU:function(e,t,r){(function(t){for(var n=r("bQgK"),i="undefined"===typeof window?t:window,o=["moz","webkit"],a="AnimationFrame",s=i["request"+a],l=i["cancel"+a]||i["cancelRequest"+a],c=0;!s&&c<o.length;c++)s=i[o[c]+"Request"+a],l=i[o[c]+"Cancel"+a]||i[o[c]+"CancelRequest"+a];if(!s||!l){var u=0,h=0,d=[];s=function(e){if(0===d.length){var t=n(),r=Math.max(0,16.666666666666668-(t-u));u=r+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(r){setTimeout((function(){throw r}),0)}}),Math.round(r))}return d.push({handle:++h,callback:e,cancelled:!1}),h},l=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(i,e)},e.exports.cancel=function(){l.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=s,e.cancelAnimationFrame=l}}).call(this,r("ntbh"))},xZGU:function(e,t,r){"use strict";(function(t){var n,i=r("HDXh"),o=i.Buffer,a={};for(n in i)i.hasOwnProperty(n)&&"SlowBuffer"!==n&&"Buffer"!==n&&(a[n]=i[n]);var s=a.Buffer={};for(n in o)o.hasOwnProperty(n)&&"allocUnsafe"!==n&&"allocUnsafeSlow"!==n&&(s[n]=o[n]);if(a.Buffer.prototype=o.prototype,s.from&&s.from!==Uint8Array.from||(s.from=function(e,t,r){if("number"===typeof e)throw new TypeError('The "value" argument must not be of type number. Received type '+typeof e);if(e&&"undefined"===typeof e.length)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);return o(e,t,r)}),s.alloc||(s.alloc=function(e,t,r){if("number"!==typeof e)throw new TypeError('The "size" argument must be of type number. Received type '+typeof e);if(e<0||e>=2*(1<<30))throw new RangeError('The value "'+e+'" is invalid for option "size"');var n=o(e);return t&&0!==t.length?"string"===typeof r?n.fill(t,r):n.fill(t):n.fill(0),n}),!a.kStringMaxLength)try{a.kStringMaxLength=t.binding("buffer").kStringMaxLength}catch(l){}a.constants||(a.constants={MAX_LENGTH:a.kMaxLength},a.kStringMaxLength&&(a.constants.MAX_STRING_LENGTH=a.kStringMaxLength)),e.exports=a}).call(this,r("8oxB"))},xq54:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=r("HDXh").Buffer,s=r(2).inspect,l=s&&s.custom||"inspect";e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=null,this.tail=null,this.length=0}var t,r,c;return t=e,(r=[{key:"push",value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}},{key:"unshift",value:function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length}},{key:"shift",value:function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r}},{key:"concat",value:function(e){if(0===this.length)return a.alloc(0);for(var t,r,n,i=a.allocUnsafe(e>>>0),o=this.head,s=0;o;)t=o.data,r=i,n=s,a.prototype.copy.call(t,r,n),s+=o.data.length,o=o.next;return i}},{key:"consume",value:function(e,t){var r;return e<this.head.data.length?(r=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):r=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(e){var t=this.head,r=1,n=t.data;for(e-=n.length;t=t.next;){var i=t.data,o=e>i.length?i.length:e;if(o===i.length?n+=i:n+=i.slice(0,e),0===(e-=o)){o===i.length?(++r,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=i.slice(o));break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(e){var t=a.allocUnsafe(e),r=this.head,n=1;for(r.data.copy(t),e-=r.data.length;r=r.next;){var i=r.data,o=e>i.length?i.length:e;if(i.copy(t,t.length-e,0,o),0===(e-=o)){o===i.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=i.slice(o));break}++n}return this.length-=n,t}},{key:l,value:function(e,t){return s(this,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{depth:0,customInspect:!1}))}}])&&o(t.prototype,r),c&&o(t,c),e}()},yEVw:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),o=r("vOnD"),a=r("nShV"),s=r("8CDE"),l=r("7sPp"),c=r("QUga"),u=r("V0nP"),h=r("aBfq"),d=r("NWnW"),f=r("586Q"),p=r("8UhZ"),m=r("V9G2"),v=r("ApjV"),g=r("EUpe"),b=r("u2Cb");const y=Object(o.d)(f.f).withConfig({displayName:"CategoryCard__Wrap",componentId:"sc-10psc0b-0"})(["height:100%;min-height:100px;"]),w=(Object(o.d)(u.a).withConfig({displayName:"CategoryCard__Poster",componentId:"sc-10psc0b-1"})(["object-fit:cover;width:100%;height:512px;border-radius:var(--surface-border-radius);"]),Object(o.d)(a.b).withConfig({displayName:"CategoryCard__Header",componentId:"sc-10psc0b-2"})(["justify-content:space-between;align-items:center;"])),M=Object(o.d)(s.a).withConfig({displayName:"CategoryCard__Content",componentId:"sc-10psc0b-3"})(["grid-gap:0;"]),E=Object(o.d)(l.a).withConfig({displayName:"CategoryCard__Name",componentId:"sc-10psc0b-4"})(["transition:opacity 150ms ease;",""],(({onClick:e})=>e&&Object(o.c)(["cursor:pointer;&:hover{opacity:0.45;}"]))),_=({category:e,checked:t,appearance:r,className:n,style:o,onLink:a,onChecked:s,onDelete:l,onEdit:u})=>{const f=Object(v.b)(),{setQuery:_}=Object(p.c)();return i.a.createElement(y,{className:n,style:o,checked:t,appearance:r},i.a.createElement(M,null,i.a.createElement(w,null,i.a.createElement(h.a,{date:e.createdAt,category:Object(d.e)(e.type)}),i.a.createElement(g.a,{typeText:"\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",checked:t,onEdit:u&&(()=>{f(m.c,{id:e.id,category:e,mutation:b.a.UPDATE_CATEGORY})(),u&&u()}),onDelete:l&&(()=>{f(m.b,{id:e.id,category:e,mutation:b.a.DELETE_CATEGORY})(),l&&l()}),onChecked:s})),i.a.createElement(E,{tag:"h4",onClick:()=>_(e.id,"category",a)},e.name),i.a.createElement(c.b,null,e.description)))};_.defaultProps={appearance:"default"},t.a=_},yXmM:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.containerStyleDefault={position:"relative",overflow:"hidden",width:"100%",height:"100%"},t.containerStyleAutoHeight={height:"auto"},t.viewStyleDefault={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"scroll",WebkitOverflowScrolling:"touch"},t.viewStyleAutoHeight={position:"relative",top:void 0,left:void 0,right:void 0,bottom:void 0},t.viewStyleUniversalInitial={overflow:"hidden",marginRight:0,marginBottom:0},t.trackHorizontalStyleDefault={position:"absolute",height:6},t.trackVerticalStyleDefault={position:"absolute",width:6},t.thumbHorizontalStyleDefault={position:"relative",display:"block",height:"100%"},t.thumbVerticalStyleDefault={position:"relative",display:"block",width:"100%"},t.disableSelectStyle={userSelect:"none"},t.disableSelectStyleReset={userSelect:""}},ybjB:function(e,t,r){"use strict";var n={};function i(e,t,r){r||(r=Error);var i=function(e){var r,n;function i(r,n,i){return e.call(this,function(e,r,n){return"string"===typeof t?t:t(e,r,n)}(r,n,i))||this}return n=e,(r=i).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n,i}(r);i.prototype.name=r.name,i.prototype.code=e,n[e]=i}function o(e,t){if(Array.isArray(e)){var r=e.length;return e=e.map((function(e){return String(e)})),r>2?"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]:2===r?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}return"of ".concat(t," ").concat(String(e))}i("ERR_INVALID_OPT_VALUE",(function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'}),TypeError),i("ERR_INVALID_ARG_TYPE",(function(e,t,r){var n,i,a,s;if("string"===typeof t&&(i="not ",t.substr(!a||a<0?0:+a,i.length)===i)?(n="must not be",t=t.replace(/^not /,"")):n="must be",function(e,t,r){return(void 0===r||r>e.length)&&(r=e.length),e.substring(r-t.length,r)===t}(e," argument"))s="The ".concat(e," ").concat(n," ").concat(o(t,"type"));else{var l=function(e,t,r){return"number"!==typeof r&&(r=0),!(r+t.length>e.length)&&-1!==e.indexOf(t,r)}(e,".")?"property":"argument";s='The "'.concat(e,'" ').concat(l," ").concat(n," ").concat(o(t,"type"))}return s+=". Received type ".concat(typeof r)}),TypeError),i("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),i("ERR_METHOD_NOT_IMPLEMENTED",(function(e){return"The "+e+" method is not implemented"})),i("ERR_STREAM_PREMATURE_CLOSE","Premature close"),i("ERR_STREAM_DESTROYED",(function(e){return"Cannot call "+e+" after a stream was destroyed"})),i("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),i("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),i("ERR_STREAM_WRITE_AFTER_END","write after end"),i("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),i("ERR_UNKNOWN_ENCODING",(function(e){return"Unknown encoding: "+e}),TypeError),i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),e.exports.codes=n},"z/Nc":function(e,t){var r={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};e.exports=function(e,t){return"number"!==typeof t||r[e]?t:t+"px"}},z71Z:function(e,t,r){"use strict";const n=r("P7XM"),i=r("vBIh"),o=r("YoN+").DecoderBuffer,a=r("g2Dh"),s=r("i3FT");function l(e){this.enc="der",this.name=e.name,this.entity=e,this.tree=new c,this.tree._init(e.body)}function c(e){a.call(this,"der",e)}function u(e,t){let r=e.readUInt8(t);if(e.isError(r))return r;const n=s.tagClass[r>>6],i=0===(32&r);if(31===(31&r)){let n=r;for(r=0;128===(128&n);){if(n=e.readUInt8(t),e.isError(n))return n;r<<=7,r|=127&n}}else r&=31;return{cls:n,primitive:i,tag:r,tagStr:s.tag[r]}}function h(e,t,r){let n=e.readUInt8(r);if(e.isError(n))return n;if(!t&&128===n)return null;if(0===(128&n))return n;const i=127&n;if(i>4)return e.error("length octect is too long");n=0;for(let o=0;o<i;o++){n<<=8;const t=e.readUInt8(r);if(e.isError(t))return t;n|=t}return n}e.exports=l,l.prototype.decode=function(e,t){return o.isDecoderBuffer(e)||(e=new o(e,t)),this.tree._decode(e,t)},n(c,a),c.prototype._peekTag=function(e,t,r){if(e.isEmpty())return!1;const n=e.save(),i=u(e,'Failed to peek tag: "'+t+'"');return e.isError(i)?i:(e.restore(n),i.tag===t||i.tagStr===t||i.tagStr+"of"===t||r)},c.prototype._decodeTag=function(e,t,r){const n=u(e,'Failed to decode tag of "'+t+'"');if(e.isError(n))return n;let i=h(e,n.primitive,'Failed to get length of "'+t+'"');if(e.isError(i))return i;if(!r&&n.tag!==t&&n.tagStr!==t&&n.tagStr+"of"!==t)return e.error('Failed to match tag: "'+t+'"');if(n.primitive||null!==i)return e.skip(i,'Failed to match body of: "'+t+'"');const o=e.save(),a=this._skipUntilEnd(e,'Failed to skip indefinite length body: "'+this.tag+'"');return e.isError(a)?a:(i=e.offset-o.offset,e.restore(o),e.skip(i,'Failed to match body of: "'+t+'"'))},c.prototype._skipUntilEnd=function(e,t){for(;;){const r=u(e,t);if(e.isError(r))return r;const n=h(e,r.primitive,t);if(e.isError(n))return n;let i;if(i=r.primitive||null!==n?e.skip(n):this._skipUntilEnd(e,t),e.isError(i))return i;if("end"===r.tagStr)break}},c.prototype._decodeList=function(e,t,r,n){const i=[];for(;!e.isEmpty();){const t=this._peekTag(e,"end");if(e.isError(t))return t;const o=r.decode(e,"der",n);if(e.isError(o)&&t)break;i.push(o)}return i},c.prototype._decodeStr=function(e,t){if("bitstr"===t){const t=e.readUInt8();return e.isError(t)?t:{unused:t,data:e.raw()}}if("bmpstr"===t){const t=e.raw();if(t.length%2===1)return e.error("Decoding of string type: bmpstr length mismatch");let r="";for(let e=0;e<t.length/2;e++)r+=String.fromCharCode(t.readUInt16BE(2*e));return r}if("numstr"===t){const t=e.raw().toString("ascii");return this._isNumstr(t)?t:e.error("Decoding of string type: numstr unsupported characters")}if("octstr"===t)return e.raw();if("objDesc"===t)return e.raw();if("printstr"===t){const t=e.raw().toString("ascii");return this._isPrintstr(t)?t:e.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(t)?e.raw().toString():e.error("Decoding of string type: "+t+" unsupported")},c.prototype._decodeObjid=function(e,t,r){let n;const i=[];let o=0,a=0;for(;!e.isEmpty();)a=e.readUInt8(),o<<=7,o|=127&a,0===(128&a)&&(i.push(o),o=0);128&a&&i.push(o);const s=i[0]/40|0,l=i[0]%40;if(n=r?i:[s,l].concat(i.slice(1)),t){let e=t[n.join(" ")];void 0===e&&(e=t[n.join(".")]),void 0!==e&&(n=e)}return n},c.prototype._decodeTime=function(e,t){const r=e.raw().toString();let n,i,o,a,s,l;if("gentime"===t)n=0|r.slice(0,4),i=0|r.slice(4,6),o=0|r.slice(6,8),a=0|r.slice(8,10),s=0|r.slice(10,12),l=0|r.slice(12,14);else{if("utctime"!==t)return e.error("Decoding "+t+" time is not supported yet");n=0|r.slice(0,2),i=0|r.slice(2,4),o=0|r.slice(4,6),a=0|r.slice(6,8),s=0|r.slice(8,10),l=0|r.slice(10,12),n=n<70?2e3+n:1900+n}return Date.UTC(n,i-1,o,a,s,l,0)},c.prototype._decodeNull=function(){return null},c.prototype._decodeBool=function(e){const t=e.readUInt8();return e.isError(t)?t:0!==t},c.prototype._decodeInt=function(e,t){const r=e.raw();let n=new i(r);return t&&(n=t[n.toString(10)]||n),n},c.prototype._use=function(e,t){return"function"===typeof e&&(e=e(t)),e._getDecoder("der").tree}},zZGF:function(e){e.exports=JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')}}]);