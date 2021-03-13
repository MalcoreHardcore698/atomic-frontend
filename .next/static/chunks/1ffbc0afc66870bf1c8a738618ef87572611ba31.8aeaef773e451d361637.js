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
      projects {
        id
      }
    }
    token
    gender
    register
    settings
    dateOfBirth
    updatedAt
    createdAt
  }
`,w=b.a`
  fragment ProjectFields on Project {
    id
    author {
      name
      avatar {
        path
      }
    }
    title
    description
    body
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
`,M=b.a`
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
`,E=b.a`
  fragment CategoryFields on Category {
    id
    name
    type
    description
    createdAt
  }
`,_=b.a`
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
`,k=b.a`
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
`,O=b.a`
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
`,j=b.a`
  fragment ImageFields on Image {
    id
    path
    filename
    updatedAt
    createdAt
  }
`,x=b.a`
  fragment FileFields on File {
    id
    path
    filename
    updatedAt
    createdAt
  }
`,S=b.a`
  fragment RoleFields on Role {
    id
    name
    permissions
    createdAt
  }
`,A=b.a`
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
`,C=b.a`
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
`,P=b.a`
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
`,I=b.a`
  mutation googleAuth($accessToken: String!) {
    googleAuth(accessToken: $accessToken) {
      ...UserFields
    }
  }
  ${y}
`,T=b.a`
  mutation facebookAuth($accessToken: String!) {
    facebookAuth(accessToken: $accessToken) {
      ...UserFields
    }
  }
  ${y}
`,R=b.a`
  mutation checkin($login: String!) {
    checkin(login: $login)
  }
`,L=b.a`
  mutation login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      ...UserFields
    }
  }
  ${y}
`,N=b.a`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      ...UserFields
    }
  }
  ${y}
`,D=b.a`
  mutation logout {
    logout
  }
`,U=b.a`
  query checkUser($search: String!) {
    checkUser(search: $search) {
      status
      message
    }
  }
`,B=b.a`
  query getUser($email: String) {
    getUser(email: $email) {
      ...UserFields
    }
  }
  ${y}
`,z=b.a`
  query getUsers(
    $offset: Int
    $limit: Int
    $search: String
    $email: [String]
    $account: [AccountType]
    $company: String
  ) {
    getUsers(
      offset: $offset
      limit: $limit
      search: $search
      email: $email
      account: $account
      company: $company
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
`,F=b.a`
  query getUsers(
    $offset: Int
    $limit: Int
    $search: String
    $email: [String]
    $account: [AccountType]
    $company: String
  ) {
    getUsers(
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
`,V=b.a`
  query getUserMembers($email: String!) {
    getUserMembers(email: $email) {
      name
      about
      avatar {
        id
        path
      }
      account
      email
    }
  }
`,q=b.a`
  query getProjects($member: String) {
    getProjects(member: $member) {
      ...ProjectFields
    }
  }
  ${w}
`,H=b.a`
  query getProjects($author: String) {
    getProjects(author: $author) {
      ...ProjectFields
    }
  }
  ${w}
`,W=b.a`
  mutation createUser($input: UserCreateInput!) {
    createUser(input: $input) {
      ...UserFields
    }
  }
  ${y}
`,G=b.a`
  mutation updateClientUser($input: UserUpdateInput!) {
    updateClientUser(input: $input) {
      ...UserFields
    }
  }
  ${y}
`,Z=b.a`
  mutation updateUser($email: String!, $input: UserUpdateInput!) {
    updateUser(email: $email, input: $input) {
      ...UserFields
    }
  }
  ${y}
`,$=b.a`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email) {
      ...UserFields
    }
  }
  ${y}
`,K=b.a`
  mutation addUserProject($project: ID!, $folder: ID!) {
    addUserProject(project: $project, folder: $folder)
  }
`,Y=b.a`
  mutation addUserFolder($name: String!) {
    addUserFolder(name: $name) {
      id
      name
      projects {
        id
      }
    }
  }
`,Q=b.a`
  mutation deleteUserFolder($id: ID!) {
    deleteUserFolder(id: $id) {
      id
      name
      projects {
        id
      }
    }
  }
`,X=b.a`
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
  ${_}
`,J=b.a`
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
`,tt=b.a`
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
  ${w}
`,et=b.a`
  query getMetaIndex($offset: Int, $limit: Int, $status: PostStatus) {
    getUsers {
      ...UserFields
    }
    getArticles(status: $status) {
      ...ArticleFields
    }
    getProjects(offset: $offset, limit: $limit, status: $status) {
      ...ProjectFields
    }
  }
  ${y}
  ${M}
  ${w}
`,nt=b.a`
  query getMetaAuthors($offset: Int, $limit: Int, $search: String) {
    getUsers(offset: $offset, limit: $limit, search: $search) {
      ...UserFields
    }
  }
  ${y}
`,rt=b.a`
  query getMetaArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
      ...ArticleFields
    }
    getCategories {
      ...CategoryFields
    }
  }
  ${M}
  ${E}
`,it=b.a`
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
  ${w}
  ${E}
`,ot=b.a`
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
`,at=b.a`
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
`,st=b.a`
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
`,ut=b.a`
  query getDashboardSettings {
    getDashboardSettings {
      ...DashboardSettingsFields
    }
  }
  ${P}
`,ct=b.a`
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
`,lt=b.a`
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
`,ht=b.a`
  query getMetaDashboardArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
      ...ArticleFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${M}
  ${E}
`,ft=b.a`
  query getMetaDashboardProjects(
    $offset: Int
    $limit: Int
    $search: String
    $category: ID
    $status: PostStatus
    $account: [AccountType]
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
    getUsers(account: $account) {
      ...UserFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${y}
  ${w}
  ${E}
`,dt=b.a`
  query getMetaDashboardCategories($offset: Int, $limit: Int) {
    getCategories(offset: $offset, limit: $limit) {
      ...CategoryFields
    }
    getCategoryTypes
  }
  ${E}
`,pt=b.a`
  query getMetaDashboardTickets($offset: Int, $limit: Int) {
    getTickets(offset: $offset, limit: $limit) {
      ...TicketFields
    }
  }
  ${A}
`,mt=b.a`
  query getMetaDashboardUsers($offset: Int, $limit: Int) {
    getUsers(offset: $offset, limit: $limit) {
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
  ${S}
`,vt=b.a`
  query getMetaDashboardRoles($offset: Int, $limit: Int) {
    getRoles(offset: $offset, limit: $limit) {
      ...RoleFields
    }
    getPermissions
  }
  ${S}
`,gt=b.a`
  mutation updateMetaDashboardSettings($input: DashboardSettingsInput!) {
    updateDashboardSettings(input: $input) {
      ...DashboardSettingsFields
    }
  }
  ${P}
`,bt=b.a`
  query getChat($id: ID!) {
    getChat(id: $id) {
      ...ChatFields
      messages {
        ...MessageFields
      }
    }
  }
  ${O}
  ${_}
`,yt=b.a`
  query getRole($id: ID!) {
    getRole(id: $id) {
      ...RoleFields
    }
  }
  ${S}
`,wt=b.a`
  query getRoles($search: String) {
    getRoles(search: $search) {
      ...RoleFields
    }
  }
  ${S}
`,Mt=b.a`
  mutation createRole($input: RoleCreateInput!) {
    createRole(input: $input) {
      ...RoleFields
    }
  }
  ${S}
`,Et=b.a`
  mutation updateRole($id: ID!, $input: RoleUpdateInput!) {
    updateRole(id: $id, input: $input) {
      ...RoleFields
    }
  }
  ${S}
`,_t=b.a`
  mutation deleteRole($id: ID!) {
    deleteRole(id: $id) {
      ...RoleFields
    }
  }
  ${S}
`,kt=b.a`
  mutation getFiles($search: String) {
    getFiles(search: $search) {
      ...FileFields
    }
  }
  ${x}
`,Ot=b.a`
  mutation createFile($file: Upload!) {
    createFile(file: $file) {
      ...FileFields
    }
  }
  ${x}
`,jt=b.a`
  mutation deleteFile($id: ID!) {
    deleteFile(id: $id) {
      ...FileFields
    }
  }
  ${x}
`,xt=b.a`
  mutation getImages($search: String) {
    getImages(search: $search) {
      ...ImageFields
    }
  }
  ${j}
`,St=b.a`
  mutation createImage($file: Upload!) {
    createImage(file: $file) {
      ...ImageFields
    }
  }
  ${j}
`,At=b.a`
  mutation deleteImage($id: ID!) {
    deleteImage(id: $id) {
      ...ImageFields
    }
  }
  ${j}
`,Ct=b.a`
  query getTicket($id: ID!) {
    getTicket(id: $id) {
      ...TicketFields
    }
  }
  ${A}
`,Pt=b.a`
  query getTickets($offset: Int, $limit: Int, $search: String) {
    getTickets(offset: $offset, limit: $limit, search: $search) {
      ...TicketFields
    }
  }
  ${A}
`,It=b.a`
  query getUserTickets {
    getUserTickets {
      ...TicketFields
    }
  }
  ${A}
`,Tt=b.a`
  mutation createUserTicket($input: UserTicketCreateInput!) {
    createUserTicket(input: $input)
  }
`,Rt=b.a`
  mutation createTicket($input: TicketCreateInput!) {
    createTicket(input: $input) {
      ...TicketFields
    }
  }
  ${A}
`,Lt=b.a`
  mutation updateTicket($id: ID!, $input: TicketUpdateInput!) {
    updateTicket(id: $id, input: $input) {
      ...TicketFields
    }
  }
  ${A}
`,Nt=b.a`
  mutation deleteTicket($id: ID!) {
    deleteTicket(id: $id) {
      ...TicketFields
    }
  }
  ${A}
`,Dt=b.a`
  mutation closeTicket($id: ID!) {
    closeTicket(id: $id) {
      ...TicketFields
    }
  }
  ${A}
`,Ut=b.a`
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
  ${O}
  ${_}
`,Bt=b.a`
  mutation addUserChat($recipient: String!) {
    addUserChat(recipient: $recipient)
  }
`,zt=b.a`
  mutation sendMessage($recipient: String!, $text: String!) {
    sendMessage(recipient: $recipient, text: $text) {
      ...MessageFields
    }
  }
  ${_}
`,Ft=b.a`
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
  ${k}
`,Vt=b.a`
  query getArticle($id: ID!) {
    getArticle(id: $id) {
      ...ArticleFields
    }
  }
  ${M}
`,qt=b.a`
  query getArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
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
`,Ht=b.a`
  mutation createArticle($input: ArticleCreateInput!, $status: PostStatus) {
    createArticle(input: $input, status: $status) {
      ...ArticleFields
    }
  }
  ${M}
`,Wt=b.a`
  mutation updateArticle($id: ID!, $input: ArticleUpdateInput!, $status: PostStatus) {
    updateArticle(id: $id, input: $input, status: $status) {
      ...ArticleFields
    }
  }
  ${M}
`,Gt=b.a`
  mutation deleteArticle($id: ID!, $status: PostStatus) {
    deleteArticle(id: $id, status: $status) {
      ...ArticleFields
    }
  }
  ${M}
`,Zt=b.a`
  query getProject($id: ID!) {
    getProject(id: $id) {
      ...ProjectFields
    }
  }
  ${w}
`,$t=b.a`
  query getProjects($offset: Int, $limit: Int, $category: ID, $status: PostStatus) {
    getProjects(offset: $offset, limit: $limit, category: $category, status: $status) {
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
      status
    }
  }
`,Kt=b.a`
  query getProjectsByIds($projects: [ID]!, $status: PostStatus) {
    getProjectsByIds(projects: $projects, status: $status) {
      ...ProjectFields
    }
  }
  ${w}
`,Yt=b.a`
  mutation likeProject($id: ID!) {
    likeProject(id: $id) {
      likedProjects {
        ...ProjectFields
      }
    }
  }
  ${w}
`,Qt=b.a`
  mutation createProject($input: ProjectCreateInput!, $status: PostStatus) {
    createProject(input: $input, status: $status) {
      ...ProjectFields
    }
  }
  ${w}
`,Xt=b.a`
  mutation updateProject($id: ID!, $input: ProjectUpdateInput!, $status: PostStatus) {
    updateProject(id: $id, input: $input, status: $status) {
      ...ProjectFields
    }
  }
  ${w}
`,Jt=b.a`
  mutation deleteProject($id: ID!, $status: PostStatus) {
    deleteProject(id: $id, status: $status) {
      ...ProjectFields
    }
  }
  ${w}
`,te=b.a`
  query getCategory($id: ID!) {
    getCategory(id: $id) {
      ...CategoryFields
    }
  }
  ${E}
`,ee=b.a`
  query getCategories($offset: Int, $limit: Int, $type: CategoryType, $search: String) {
    getCategories(offset: $offset, limit: $limit, type: $type, search: $search) {
      ...CategoryFields
    }
  }
  ${E}
`,ne=b.a`
  mutation createCategory($input: CategoryCreateInput!) {
    createCategory(input: $input) {
      ...CategoryFields
    }
  }
  ${E}
`,re=b.a`
  mutation updateCategory($id: ID!, $input: CategoryUpdateInput!) {
    updateCategory(id: $id, input: $input) {
      ...CategoryFields
    }
  }
  ${E}
`,ie=b.a`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      ...CategoryFields
    }
  }
  ${E}
`,oe=b.a`
  query getComments($id: ID!) {
    getComments(id: $id) {
      ...CommentFields
    }
  }
  ${C}
`,ae=b.a`
  mutation sendComment($article: ID!, $text: String!) {
    sendComment(article: $article, text: $text) {
      ...CommentFields
    }
  }
  ${C}
`,se=b.a`
  mutation likeComment($comment: ID!, $likedUser: String, $liked: Boolean!) {
    likeComment(comment: $comment, likedUser: $likedUser, liked: $liked) {
      ...CommentFields
    }
  }
  ${C}
`,ue=b.a`
  mutation createComment($input: CommentCreateInput!) {
    createComment(input: $input) {
      ...CommentFields
    }
  }
  ${C}
`,ce=b.a`
  mutation updateComment($id: ID!, $input: CommentUpdateInput!) {
    updateComment(id: $id, input: $input) {
      ...CommentFields
    }
  }
  ${C}
`,le=b.a`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      ...CommentFields
    }
  }
  ${C}
`;e.a={...r,...i,...o,...a,...s,...u,...c,...l,...h,...f,...d,...p,...m,...v}},u6sg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=e.default},uDfV:function(t,e,n){var r=n("P7XM"),i=n("T9HO"),o=n("tnIz"),a=n("hwdV").Buffer,s=new Array(160);function u(){this.init(),this._w=s,o.call(this,128,112)}r(u,i),u.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},u.prototype._hash=function(){var t=a.allocUnsafe(48);function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=u},uagp:function(t,e,n){"use strict";var r=n("gK+I"),i=n("aqI/"),o=n("86MQ"),a=n("DLvh"),s=n("/ayr"),u=o.assert,c=n("uzSA"),l=n("tz+M");function h(t){if(!(this instanceof h))return new h(t);"string"===typeof t&&(u(Object.prototype.hasOwnProperty.call(a,t),"Unknown curve "+t),t=a[t]),t instanceof a.PresetCurve&&(t={curve:t}),this.curve=t.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=t.curve.g,this.g.precompute(t.curve.n.bitLength()+1),this.hash=t.hash||t.curve.hash}t.exports=h,h.prototype.keyPair=function(t){return new c(this,t)},h.prototype.keyFromPrivate=function(t,e){return c.fromPrivate(this,t,e)},h.prototype.keyFromPublic=function(t,e){return c.fromPublic(this,t,e)},h.prototype.genKeyPair=function(t){t||(t={});for(var e=new i({hash:this.hash,pers:t.pers,persEnc:t.persEnc||"utf8",entropy:t.entropy||s(this.hash.hmacStrength),entropyEnc:t.entropy&&t.entropyEnc||"utf8",nonce:this.n.toArray()}),n=this.n.byteLength(),o=this.n.sub(new r(2));;){var a=new r(e.generate(n));if(!(a.cmp(o)>0))return a.iaddn(1),this.keyFromPrivate(a)}},h.prototype._truncateToN=function(t,e){var n=8*t.byteLength()-this.n.bitLength();return n>0&&(t=t.ushrn(n)),!e&&t.cmp(this.n)>=0?t.sub(this.n):t},h.prototype.sign=function(t,e,n,o){"object"===typeof n&&(o=n,n=null),o||(o={}),e=this.keyFromPrivate(e,n),t=this._truncateToN(new r(t,16));for(var a=this.n.byteLength(),s=e.getPrivate().toArray("be",a),u=t.toArray("be",a),c=new i({hash:this.hash,entropy:s,nonce:u,pers:o.pers,persEnc:o.persEnc||"utf8"}),h=this.n.sub(new r(1)),f=0;;f++){var d=o.k?o.k(f):new r(c.generate(this.n.byteLength()));if(!((d=this._truncateToN(d,!0)).cmpn(1)<=0||d.cmp(h)>=0)){var p=this.g.mul(d);if(!p.isInfinity()){var m=p.getX(),v=m.umod(this.n);if(0!==v.cmpn(0)){var g=d.invm(this.n).mul(v.mul(e.getPrivate()).iadd(t));if(0!==(g=g.umod(this.n)).cmpn(0)){var b=(p.getY().isOdd()?1:0)|(0!==m.cmp(v)?2:0);return o.canonical&&g.cmp(this.nh)>0&&(g=this.n.sub(g),b^=1),new l({r:v,s:g,recoveryParam:b})}}}}}},h.prototype.verify=function(t,e,n,i){t=this._truncateToN(new r(t,16)),n=this.keyFromPublic(n,i);var o=(e=new l(e,"hex")).r,a=e.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;if(a.cmpn(1)<0||a.cmp(this.n)>=0)return!1;var s,u=a.invm(this.n),c=u.mul(t).umod(this.n),h=u.mul(o).umod(this.n);return this.curve._maxwellTrick?!(s=this.g.jmulAdd(c,n.getPublic(),h)).isInfinity()&&s.eqXToP(o):!(s=this.g.mulAdd(c,n.getPublic(),h)).isInfinity()&&0===s.getX().umod(this.n).cmp(o)},h.prototype.recoverPubKey=function(t,e,n,i){u((3&n)===n,"The recovery param is more than two bits"),e=new l(e,i);var o=this.n,a=new r(t),s=e.r,c=e.s,h=1&n,f=n>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&f)throw new Error("Unable to find sencond key candinate");s=f?this.curve.pointFromX(s.add(this.curve.n),h):this.curve.pointFromX(s,h);var d=e.r.invm(o),p=o.sub(a).mul(d).umod(o),m=c.mul(d).umod(o);return this.g.mulAdd(p,s,m)},h.prototype.getKeyRecoveryParam=function(t,e,n,r){if(null!==(e=new l(e,r)).recoveryParam)return e.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(t,e,i)}catch(t){continue}if(o.eq(n))return i}throw new Error("Unable to find valid recovery factor")}},usKN:function(t,e,n){var r={ECB:n("AUX7"),CBC:n("wRn4"),CFB:n("NQVK"),CFB8:n("YskG"),CFB1:n("Ujlg"),OFB:n("UWVS"),CTR:n("at63"),GCM:n("at63")},i=n("6F8h");for(var o in i)i[o].module=r[i[o].mode];t.exports=i},uzSA:function(t,e,n){"use strict";var r=n("gK+I"),i=n("86MQ").assert;function o(t,e){this.ec=t,this.priv=null,this.pub=null,e.priv&&this._importPrivate(e.priv,e.privEnc),e.pub&&this._importPublic(e.pub,e.pubEnc)}t.exports=o,o.fromPublic=function(t,e,n){return e instanceof o?e:new o(t,{pub:e,pubEnc:n})},o.fromPrivate=function(t,e,n){return e instanceof o?e:new o(t,{priv:e,privEnc:n})},o.prototype.validate=function(){var t=this.getPublic();return t.isInfinity()?{result:!1,reason:"Invalid public key"}:t.validate()?t.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},o.prototype.getPublic=function(t,e){return"string"===typeof t&&(e=t,t=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),e?this.pub.encode(e,t):this.pub},o.prototype.getPrivate=function(t){return"hex"===t?this.priv.toString(16,2):this.priv},o.prototype._importPrivate=function(t,e){this.priv=new r(t,e||16),this.priv=this.priv.umod(this.ec.curve.n)},o.prototype._importPublic=function(t,e){if(t.x||t.y)return"mont"===this.ec.curve.type?i(t.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||i(t.x&&t.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(t.x,t.y));this.pub=this.ec.curve.decodePoint(t,e)},o.prototype.derive=function(t){return t.validate()||i(t.validate(),"public point not validated"),t.mul(this.priv).getX()},o.prototype.sign=function(t,e,n){return this.ec.sign(t,this,e,n)},o.prototype.verify=function(t,e){return this.ec.verify(t,e,this)},o.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},vBIh:function(t,e,n){(function(t){!function(t,e){"use strict";function r(t,e){if(!t)throw new Error(e||"Assertion failed")}function i(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}function o(t,e,n){if(o.isBN(t))return t;this.negative=0,this.words=null,this.length=0,this.red=null,null!==t&&("le"!==e&&"be"!==e||(n=e,e=10),this._init(t||0,e||10,n||"be"))}var a;"object"===typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26;try{a=n(10).Buffer}catch(k){}function s(t,e,n){for(var r=0,i=Math.min(t.length,n),o=e;o<i;o++){var a=t.charCodeAt(o)-48;r<<=4,r|=a>=49&&a<=54?a-49+10:a>=17&&a<=22?a-17+10:15&a}return r}function u(t,e,n,r){for(var i=0,o=Math.min(t.length,n),a=e;a<o;a++){var s=t.charCodeAt(a)-48;i*=r,i+=s>=49?s-49+10:s>=17?s-17+10:s}return i}o.isBN=function(t){return t instanceof o||null!==t&&"object"===typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return t.cmp(e)<0?t:e},o.prototype._init=function(t,e,n){if("number"===typeof t)return this._initNumber(t,e,n);if("object"===typeof t)return this._initArray(t,e,n);"hex"===e&&(e=16),r(e===(0|e)&&e>=2&&e<=36);var i=0;"-"===(t=t.toString().replace(/\s+/g,""))[0]&&i++,16===e?this._parseHex(t,i):this._parseBase(t,e,i),"-"===t[0]&&(this.negative=1),this.strip(),"le"===n&&this._initArray(this.toArray(),e,n)},o.prototype._initNumber=function(t,e,n){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(r(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===n&&this._initArray(this.toArray(),e,n)},o.prototype._initArray=function(t,e,n){if(r("number"===typeof t.length),t.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(t.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,a,s=0;if("be"===n)for(i=t.length-1,o=0;i>=0;i-=3)a=t[i]|t[i-1]<<8|t[i-2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++);else if("le"===n)for(i=0,o=0;i<t.length;i+=3)a=t[i]|t[i+1]<<8|t[i+2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++);return this.strip()},o.prototype._parseHex=function(t,e){this.length=Math.ceil((t.length-e)/6),this.words=new Array(this.length);for(var n=0;n<this.length;n++)this.words[n]=0;var r,i,o=0;for(n=t.length-6,r=0;n>=e;n-=6)i=s(t,n,n+6),this.words[r]|=i<<o&67108863,this.words[r+1]|=i>>>26-o&4194303,(o+=24)>=26&&(o-=26,r++);n+6!==e&&(i=s(t,e,n+6),this.words[r]|=i<<o&67108863,this.words[r+1]|=i>>>26-o&4194303),this.strip()},o.prototype._parseBase=function(t,e,n){this.words=[0],this.length=1;for(var r=0,i=1;i<=67108863;i*=e)r++;r--,i=i/e|0;for(var o=t.length-n,a=o%r,s=Math.min(o,o-a)+n,c=0,l=n;l<s;l+=r)c=u(t,l,l+r,e),this.imuln(i),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c);if(0!==a){var h=1;for(c=u(t,l,t.length,e),l=0;l<a;l++)h*=e;this.imuln(h),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c)}},o.prototype.copy=function(t){t.words=new Array(this.length);for(var e=0;e<this.length;e++)t.words[e]=this.words[e];t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype.clone=function(){var t=new o(null);return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0;return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var c=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],l=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],h=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function f(t,e,n){n.negative=e.negative^t.negative;var r=t.length+e.length|0;n.length=r,r=r-1|0;var i=0|t.words[0],o=0|e.words[0],a=i*o,s=67108863&a,u=a/67108864|0;n.words[0]=s;for(var c=1;c<r;c++){for(var l=u>>>26,h=67108863&u,f=Math.min(c,e.length-1),d=Math.max(0,c-t.length+1);d<=f;d++){var p=c-d|0;l+=(a=(i=0|t.words[p])*(o=0|e.words[d])+h)/67108864|0,h=67108863&a}n.words[c]=0|h,u=0|l}return 0!==u?n.words[c]=0|u:n.length--,n.strip()}o.prototype.toString=function(t,e){var n;if(e=0|e||1,16===(t=t||10)||"hex"===t){n="";for(var i=0,o=0,a=0;a<this.length;a++){var s=this.words[a],u=(16777215&(s<<i|o)).toString(16);n=0!==(o=s>>>24-i&16777215)||a!==this.length-1?c[6-u.length]+u+n:u+n,(i+=2)>=26&&(i-=26,a--)}for(0!==o&&(n=o.toString(16)+n);n.length%e!==0;)n="0"+n;return 0!==this.negative&&(n="-"+n),n}if(t===(0|t)&&t>=2&&t<=36){var f=l[t],d=h[t];n="";var p=this.clone();for(p.negative=0;!p.isZero();){var m=p.modn(d).toString(t);n=(p=p.idivn(d)).isZero()?m+n:c[f-m.length]+m+n}for(this.isZero()&&(n="0"+n);n.length%e!==0;)n="0"+n;return 0!==this.negative&&(n="-"+n),n}r(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0];return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&r(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(t,e){return r("undefined"!==typeof a),this.toArrayLike(a,t,e)},o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,n){var i=this.byteLength(),o=n||Math.max(1,i);r(i<=o,"byte array longer than desired length"),r(o>0,"Requested array length <= 0"),this.strip();var a,s,u="le"===e,c=new t(o),l=this.clone();if(u){for(s=0;!l.isZero();s++)a=l.andln(255),l.iushrn(8),c[s]=a;for(;s<o;s++)c[s]=0}else{for(s=0;s<o-i;s++)c[s]=0;for(s=0;!l.isZero();s++)a=l.andln(255),l.iushrn(8),c[o-s-1]=a}return c},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,n=0;return e>=4096&&(n+=13,e>>>=13),e>=64&&(n+=7,e>>>=7),e>=8&&(n+=4,e>>>=4),e>=2&&(n+=2,e>>>=2),n+e},o.prototype._zeroBits=function(t){if(0===t)return 26;var e=t,n=0;return 0===(8191&e)&&(n+=13,e>>>=13),0===(127&e)&&(n+=7,e>>>=7),0===(15&e)&&(n+=4,e>>>=4),0===(3&e)&&(n+=2,e>>>=2),0===(1&e)&&n++,n},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t);return 26*(this.length-1)+e},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var t=0,e=0;e<this.length;e++){var n=this._zeroBits(this.words[e]);if(t+=n,26!==n)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0;for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e];return this.strip()},o.prototype.ior=function(t){return r(0===(this.negative|t.negative)),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e;e=this.length>t.length?t:this;for(var n=0;n<e.length;n++)this.words[n]=this.words[n]&t.words[n];return this.length=e.length,this.strip()},o.prototype.iand=function(t){return r(0===(this.negative|t.negative)),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,n;this.length>t.length?(e=this,n=t):(e=t,n=this);for(var r=0;r<n.length;r++)this.words[r]=e.words[r]^n.words[r];if(this!==e)for(;r<e.length;r++)this.words[r]=e.words[r];return this.length=e.length,this.strip()},o.prototype.ixor=function(t){return r(0===(this.negative|t.negative)),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){r("number"===typeof t&&t>=0);var e=0|Math.ceil(t/26),n=t%26;this._expand(e),n>0&&e--;for(var i=0;i<e;i++)this.words[i]=67108863&~this.words[i];return n>0&&(this.words[i]=~this.words[i]&67108863>>26-n),this.strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){r("number"===typeof t&&t>=0);var n=t/26|0,i=t%26;return this._expand(n+1),this.words[n]=e?this.words[n]|1<<i:this.words[n]&~(1<<i),this.strip()},o.prototype.iadd=function(t){var e,n,r;if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign();if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign();this.length>t.length?(n=this,r=t):(n=t,r=this);for(var i=0,o=0;o<r.length;o++)e=(0|n.words[o])+(0|r.words[o])+i,this.words[o]=67108863&e,i=e>>>26;for(;0!==i&&o<n.length;o++)e=(0|n.words[o])+i,this.words[o]=67108863&e,i=e>>>26;if(this.length=n.length,0!==i)this.words[this.length]=i,this.length++;else if(n!==this)for(;o<n.length;o++)this.words[o]=n.words[o];return this},o.prototype.add=function(t){var e;return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0;var e=this.iadd(t);return t.negative=1,e._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign();var n,r,i=this.cmp(t);if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this;i>0?(n=this,r=t):(n=t,r=this);for(var o=0,a=0;a<r.length;a++)o=(e=(0|n.words[a])-(0|r.words[a])+o)>>26,this.words[a]=67108863&e;for(;0!==o&&a<n.length;a++)o=(e=(0|n.words[a])+o)>>26,this.words[a]=67108863&e;if(0===o&&a<n.length&&n!==this)for(;a<n.length;a++)this.words[a]=n.words[a];return this.length=Math.max(this.length,a),n!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(t){return this.clone().isub(t)};var d=function(t,e,n){var r,i,o,a=t.words,s=e.words,u=n.words,c=0,l=0|a[0],h=8191&l,f=l>>>13,d=0|a[1],p=8191&d,m=d>>>13,v=0|a[2],g=8191&v,b=v>>>13,y=0|a[3],w=8191&y,M=y>>>13,E=0|a[4],_=8191&E,k=E>>>13,O=0|a[5],j=8191&O,x=O>>>13,S=0|a[6],A=8191&S,C=S>>>13,P=0|a[7],I=8191&P,T=P>>>13,R=0|a[8],L=8191&R,N=R>>>13,D=0|a[9],U=8191&D,B=D>>>13,z=0|s[0],F=8191&z,V=z>>>13,q=0|s[1],H=8191&q,W=q>>>13,G=0|s[2],Z=8191&G,$=G>>>13,K=0|s[3],Y=8191&K,Q=K>>>13,X=0|s[4],J=8191&X,tt=X>>>13,et=0|s[5],nt=8191&et,rt=et>>>13,it=0|s[6],ot=8191&it,at=it>>>13,st=0|s[7],ut=8191&st,ct=st>>>13,lt=0|s[8],ht=8191&lt,ft=lt>>>13,dt=0|s[9],pt=8191&dt,mt=dt>>>13;n.negative=t.negative^e.negative,n.length=19;var vt=(c+(r=Math.imul(h,F))|0)+((8191&(i=(i=Math.imul(h,V))+Math.imul(f,F)|0))<<13)|0;c=((o=Math.imul(f,V))+(i>>>13)|0)+(vt>>>26)|0,vt&=67108863,r=Math.imul(p,F),i=(i=Math.imul(p,V))+Math.imul(m,F)|0,o=Math.imul(m,V);var gt=(c+(r=r+Math.imul(h,H)|0)|0)+((8191&(i=(i=i+Math.imul(h,W)|0)+Math.imul(f,H)|0))<<13)|0;c=((o=o+Math.imul(f,W)|0)+(i>>>13)|0)+(gt>>>26)|0,gt&=67108863,r=Math.imul(g,F),i=(i=Math.imul(g,V))+Math.imul(b,F)|0,o=Math.imul(b,V),r=r+Math.imul(p,H)|0,i=(i=i+Math.imul(p,W)|0)+Math.imul(m,H)|0,o=o+Math.imul(m,W)|0;var bt=(c+(r=r+Math.imul(h,Z)|0)|0)+((8191&(i=(i=i+Math.imul(h,$)|0)+Math.imul(f,Z)|0))<<13)|0;c=((o=o+Math.imul(f,$)|0)+(i>>>13)|0)+(bt>>>26)|0,bt&=67108863,r=Math.imul(w,F),i=(i=Math.imul(w,V))+Math.imul(M,F)|0,o=Math.imul(M,V),r=r+Math.imul(g,H)|0,i=(i=i+Math.imul(g,W)|0)+Math.imul(b,H)|0,o=o+Math.imul(b,W)|0,r=r+Math.imul(p,Z)|0,i=(i=i+Math.imul(p,$)|0)+Math.imul(m,Z)|0,o=o+Math.imul(m,$)|0;var yt=(c+(r=r+Math.imul(h,Y)|0)|0)+((8191&(i=(i=i+Math.imul(h,Q)|0)+Math.imul(f,Y)|0))<<13)|0;c=((o=o+Math.imul(f,Q)|0)+(i>>>13)|0)+(yt>>>26)|0,yt&=67108863,r=Math.imul(_,F),i=(i=Math.imul(_,V))+Math.imul(k,F)|0,o=Math.imul(k,V),r=r+Math.imul(w,H)|0,i=(i=i+Math.imul(w,W)|0)+Math.imul(M,H)|0,o=o+Math.imul(M,W)|0,r=r+Math.imul(g,Z)|0,i=(i=i+Math.imul(g,$)|0)+Math.imul(b,Z)|0,o=o+Math.imul(b,$)|0,r=r+Math.imul(p,Y)|0,i=(i=i+Math.imul(p,Q)|0)+Math.imul(m,Y)|0,o=o+Math.imul(m,Q)|0;var wt=(c+(r=r+Math.imul(h,J)|0)|0)+((8191&(i=(i=i+Math.imul(h,tt)|0)+Math.imul(f,J)|0))<<13)|0;c=((o=o+Math.imul(f,tt)|0)+(i>>>13)|0)+(wt>>>26)|0,wt&=67108863,r=Math.imul(j,F),i=(i=Math.imul(j,V))+Math.imul(x,F)|0,o=Math.imul(x,V),r=r+Math.imul(_,H)|0,i=(i=i+Math.imul(_,W)|0)+Math.imul(k,H)|0,o=o+Math.imul(k,W)|0,r=r+Math.imul(w,Z)|0,i=(i=i+Math.imul(w,$)|0)+Math.imul(M,Z)|0,o=o+Math.imul(M,$)|0,r=r+Math.imul(g,Y)|0,i=(i=i+Math.imul(g,Q)|0)+Math.imul(b,Y)|0,o=o+Math.imul(b,Q)|0,r=r+Math.imul(p,J)|0,i=(i=i+Math.imul(p,tt)|0)+Math.imul(m,J)|0,o=o+Math.imul(m,tt)|0;var Mt=(c+(r=r+Math.imul(h,nt)|0)|0)+((8191&(i=(i=i+Math.imul(h,rt)|0)+Math.imul(f,nt)|0))<<13)|0;c=((o=o+Math.imul(f,rt)|0)+(i>>>13)|0)+(Mt>>>26)|0,Mt&=67108863,r=Math.imul(A,F),i=(i=Math.imul(A,V))+Math.imul(C,F)|0,o=Math.imul(C,V),r=r+Math.imul(j,H)|0,i=(i=i+Math.imul(j,W)|0)+Math.imul(x,H)|0,o=o+Math.imul(x,W)|0,r=r+Math.imul(_,Z)|0,i=(i=i+Math.imul(_,$)|0)+Math.imul(k,Z)|0,o=o+Math.imul(k,$)|0,r=r+Math.imul(w,Y)|0,i=(i=i+Math.imul(w,Q)|0)+Math.imul(M,Y)|0,o=o+Math.imul(M,Q)|0,r=r+Math.imul(g,J)|0,i=(i=i+Math.imul(g,tt)|0)+Math.imul(b,J)|0,o=o+Math.imul(b,tt)|0,r=r+Math.imul(p,nt)|0,i=(i=i+Math.imul(p,rt)|0)+Math.imul(m,nt)|0,o=o+Math.imul(m,rt)|0;var Et=(c+(r=r+Math.imul(h,ot)|0)|0)+((8191&(i=(i=i+Math.imul(h,at)|0)+Math.imul(f,ot)|0))<<13)|0;c=((o=o+Math.imul(f,at)|0)+(i>>>13)|0)+(Et>>>26)|0,Et&=67108863,r=Math.imul(I,F),i=(i=Math.imul(I,V))+Math.imul(T,F)|0,o=Math.imul(T,V),r=r+Math.imul(A,H)|0,i=(i=i+Math.imul(A,W)|0)+Math.imul(C,H)|0,o=o+Math.imul(C,W)|0,r=r+Math.imul(j,Z)|0,i=(i=i+Math.imul(j,$)|0)+Math.imul(x,Z)|0,o=o+Math.imul(x,$)|0,r=r+Math.imul(_,Y)|0,i=(i=i+Math.imul(_,Q)|0)+Math.imul(k,Y)|0,o=o+Math.imul(k,Q)|0,r=r+Math.imul(w,J)|0,i=(i=i+Math.imul(w,tt)|0)+Math.imul(M,J)|0,o=o+Math.imul(M,tt)|0,r=r+Math.imul(g,nt)|0,i=(i=i+Math.imul(g,rt)|0)+Math.imul(b,nt)|0,o=o+Math.imul(b,rt)|0,r=r+Math.imul(p,ot)|0,i=(i=i+Math.imul(p,at)|0)+Math.imul(m,ot)|0,o=o+Math.imul(m,at)|0;var _t=(c+(r=r+Math.imul(h,ut)|0)|0)+((8191&(i=(i=i+Math.imul(h,ct)|0)+Math.imul(f,ut)|0))<<13)|0;c=((o=o+Math.imul(f,ct)|0)+(i>>>13)|0)+(_t>>>26)|0,_t&=67108863,r=Math.imul(L,F),i=(i=Math.imul(L,V))+Math.imul(N,F)|0,o=Math.imul(N,V),r=r+Math.imul(I,H)|0,i=(i=i+Math.imul(I,W)|0)+Math.imul(T,H)|0,o=o+Math.imul(T,W)|0,r=r+Math.imul(A,Z)|0,i=(i=i+Math.imul(A,$)|0)+Math.imul(C,Z)|0,o=o+Math.imul(C,$)|0,r=r+Math.imul(j,Y)|0,i=(i=i+Math.imul(j,Q)|0)+Math.imul(x,Y)|0,o=o+Math.imul(x,Q)|0,r=r+Math.imul(_,J)|0,i=(i=i+Math.imul(_,tt)|0)+Math.imul(k,J)|0,o=o+Math.imul(k,tt)|0,r=r+Math.imul(w,nt)|0,i=(i=i+Math.imul(w,rt)|0)+Math.imul(M,nt)|0,o=o+Math.imul(M,rt)|0,r=r+Math.imul(g,ot)|0,i=(i=i+Math.imul(g,at)|0)+Math.imul(b,ot)|0,o=o+Math.imul(b,at)|0,r=r+Math.imul(p,ut)|0,i=(i=i+Math.imul(p,ct)|0)+Math.imul(m,ut)|0,o=o+Math.imul(m,ct)|0;var kt=(c+(r=r+Math.imul(h,ht)|0)|0)+((8191&(i=(i=i+Math.imul(h,ft)|0)+Math.imul(f,ht)|0))<<13)|0;c=((o=o+Math.imul(f,ft)|0)+(i>>>13)|0)+(kt>>>26)|0,kt&=67108863,r=Math.imul(U,F),i=(i=Math.imul(U,V))+Math.imul(B,F)|0,o=Math.imul(B,V),r=r+Math.imul(L,H)|0,i=(i=i+Math.imul(L,W)|0)+Math.imul(N,H)|0,o=o+Math.imul(N,W)|0,r=r+Math.imul(I,Z)|0,i=(i=i+Math.imul(I,$)|0)+Math.imul(T,Z)|0,o=o+Math.imul(T,$)|0,r=r+Math.imul(A,Y)|0,i=(i=i+Math.imul(A,Q)|0)+Math.imul(C,Y)|0,o=o+Math.imul(C,Q)|0,r=r+Math.imul(j,J)|0,i=(i=i+Math.imul(j,tt)|0)+Math.imul(x,J)|0,o=o+Math.imul(x,tt)|0,r=r+Math.imul(_,nt)|0,i=(i=i+Math.imul(_,rt)|0)+Math.imul(k,nt)|0,o=o+Math.imul(k,rt)|0,r=r+Math.imul(w,ot)|0,i=(i=i+Math.imul(w,at)|0)+Math.imul(M,ot)|0,o=o+Math.imul(M,at)|0,r=r+Math.imul(g,ut)|0,i=(i=i+Math.imul(g,ct)|0)+Math.imul(b,ut)|0,o=o+Math.imul(b,ct)|0,r=r+Math.imul(p,ht)|0,i=(i=i+Math.imul(p,ft)|0)+Math.imul(m,ht)|0,o=o+Math.imul(m,ft)|0;var Ot=(c+(r=r+Math.imul(h,pt)|0)|0)+((8191&(i=(i=i+Math.imul(h,mt)|0)+Math.imul(f,pt)|0))<<13)|0;c=((o=o+Math.imul(f,mt)|0)+(i>>>13)|0)+(Ot>>>26)|0,Ot&=67108863,r=Math.imul(U,H),i=(i=Math.imul(U,W))+Math.imul(B,H)|0,o=Math.imul(B,W),r=r+Math.imul(L,Z)|0,i=(i=i+Math.imul(L,$)|0)+Math.imul(N,Z)|0,o=o+Math.imul(N,$)|0,r=r+Math.imul(I,Y)|0,i=(i=i+Math.imul(I,Q)|0)+Math.imul(T,Y)|0,o=o+Math.imul(T,Q)|0,r=r+Math.imul(A,J)|0,i=(i=i+Math.imul(A,tt)|0)+Math.imul(C,J)|0,o=o+Math.imul(C,tt)|0,r=r+Math.imul(j,nt)|0,i=(i=i+Math.imul(j,rt)|0)+Math.imul(x,nt)|0,o=o+Math.imul(x,rt)|0,r=r+Math.imul(_,ot)|0,i=(i=i+Math.imul(_,at)|0)+Math.imul(k,ot)|0,o=o+Math.imul(k,at)|0,r=r+Math.imul(w,ut)|0,i=(i=i+Math.imul(w,ct)|0)+Math.imul(M,ut)|0,o=o+Math.imul(M,ct)|0,r=r+Math.imul(g,ht)|0,i=(i=i+Math.imul(g,ft)|0)+Math.imul(b,ht)|0,o=o+Math.imul(b,ft)|0;var jt=(c+(r=r+Math.imul(p,pt)|0)|0)+((8191&(i=(i=i+Math.imul(p,mt)|0)+Math.imul(m,pt)|0))<<13)|0;c=((o=o+Math.imul(m,mt)|0)+(i>>>13)|0)+(jt>>>26)|0,jt&=67108863,r=Math.imul(U,Z),i=(i=Math.imul(U,$))+Math.imul(B,Z)|0,o=Math.imul(B,$),r=r+Math.imul(L,Y)|0,i=(i=i+Math.imul(L,Q)|0)+Math.imul(N,Y)|0,o=o+Math.imul(N,Q)|0,r=r+Math.imul(I,J)|0,i=(i=i+Math.imul(I,tt)|0)+Math.imul(T,J)|0,o=o+Math.imul(T,tt)|0,r=r+Math.imul(A,nt)|0,i=(i=i+Math.imul(A,rt)|0)+Math.imul(C,nt)|0,o=o+Math.imul(C,rt)|0,r=r+Math.imul(j,ot)|0,i=(i=i+Math.imul(j,at)|0)+Math.imul(x,ot)|0,o=o+Math.imul(x,at)|0,r=r+Math.imul(_,ut)|0,i=(i=i+Math.imul(_,ct)|0)+Math.imul(k,ut)|0,o=o+Math.imul(k,ct)|0,r=r+Math.imul(w,ht)|0,i=(i=i+Math.imul(w,ft)|0)+Math.imul(M,ht)|0,o=o+Math.imul(M,ft)|0;var xt=(c+(r=r+Math.imul(g,pt)|0)|0)+((8191&(i=(i=i+Math.imul(g,mt)|0)+Math.imul(b,pt)|0))<<13)|0;c=((o=o+Math.imul(b,mt)|0)+(i>>>13)|0)+(xt>>>26)|0,xt&=67108863,r=Math.imul(U,Y),i=(i=Math.imul(U,Q))+Math.imul(B,Y)|0,o=Math.imul(B,Q),r=r+Math.imul(L,J)|0,i=(i=i+Math.imul(L,tt)|0)+Math.imul(N,J)|0,o=o+Math.imul(N,tt)|0,r=r+Math.imul(I,nt)|0,i=(i=i+Math.imul(I,rt)|0)+Math.imul(T,nt)|0,o=o+Math.imul(T,rt)|0,r=r+Math.imul(A,ot)|0,i=(i=i+Math.imul(A,at)|0)+Math.imul(C,ot)|0,o=o+Math.imul(C,at)|0,r=r+Math.imul(j,ut)|0,i=(i=i+Math.imul(j,ct)|0)+Math.imul(x,ut)|0,o=o+Math.imul(x,ct)|0,r=r+Math.imul(_,ht)|0,i=(i=i+Math.imul(_,ft)|0)+Math.imul(k,ht)|0,o=o+Math.imul(k,ft)|0;var St=(c+(r=r+Math.imul(w,pt)|0)|0)+((8191&(i=(i=i+Math.imul(w,mt)|0)+Math.imul(M,pt)|0))<<13)|0;c=((o=o+Math.imul(M,mt)|0)+(i>>>13)|0)+(St>>>26)|0,St&=67108863,r=Math.imul(U,J),i=(i=Math.imul(U,tt))+Math.imul(B,J)|0,o=Math.imul(B,tt),r=r+Math.imul(L,nt)|0,i=(i=i+Math.imul(L,rt)|0)+Math.imul(N,nt)|0,o=o+Math.imul(N,rt)|0,r=r+Math.imul(I,ot)|0,i=(i=i+Math.imul(I,at)|0)+Math.imul(T,ot)|0,o=o+Math.imul(T,at)|0,r=r+Math.imul(A,ut)|0,i=(i=i+Math.imul(A,ct)|0)+Math.imul(C,ut)|0,o=o+Math.imul(C,ct)|0,r=r+Math.imul(j,ht)|0,i=(i=i+Math.imul(j,ft)|0)+Math.imul(x,ht)|0,o=o+Math.imul(x,ft)|0;var At=(c+(r=r+Math.imul(_,pt)|0)|0)+((8191&(i=(i=i+Math.imul(_,mt)|0)+Math.imul(k,pt)|0))<<13)|0;c=((o=o+Math.imul(k,mt)|0)+(i>>>13)|0)+(At>>>26)|0,At&=67108863,r=Math.imul(U,nt),i=(i=Math.imul(U,rt))+Math.imul(B,nt)|0,o=Math.imul(B,rt),r=r+Math.imul(L,ot)|0,i=(i=i+Math.imul(L,at)|0)+Math.imul(N,ot)|0,o=o+Math.imul(N,at)|0,r=r+Math.imul(I,ut)|0,i=(i=i+Math.imul(I,ct)|0)+Math.imul(T,ut)|0,o=o+Math.imul(T,ct)|0,r=r+Math.imul(A,ht)|0,i=(i=i+Math.imul(A,ft)|0)+Math.imul(C,ht)|0,o=o+Math.imul(C,ft)|0;var Ct=(c+(r=r+Math.imul(j,pt)|0)|0)+((8191&(i=(i=i+Math.imul(j,mt)|0)+Math.imul(x,pt)|0))<<13)|0;c=((o=o+Math.imul(x,mt)|0)+(i>>>13)|0)+(Ct>>>26)|0,Ct&=67108863,r=Math.imul(U,ot),i=(i=Math.imul(U,at))+Math.imul(B,ot)|0,o=Math.imul(B,at),r=r+Math.imul(L,ut)|0,i=(i=i+Math.imul(L,ct)|0)+Math.imul(N,ut)|0,o=o+Math.imul(N,ct)|0,r=r+Math.imul(I,ht)|0,i=(i=i+Math.imul(I,ft)|0)+Math.imul(T,ht)|0,o=o+Math.imul(T,ft)|0;var Pt=(c+(r=r+Math.imul(A,pt)|0)|0)+((8191&(i=(i=i+Math.imul(A,mt)|0)+Math.imul(C,pt)|0))<<13)|0;c=((o=o+Math.imul(C,mt)|0)+(i>>>13)|0)+(Pt>>>26)|0,Pt&=67108863,r=Math.imul(U,ut),i=(i=Math.imul(U,ct))+Math.imul(B,ut)|0,o=Math.imul(B,ct),r=r+Math.imul(L,ht)|0,i=(i=i+Math.imul(L,ft)|0)+Math.imul(N,ht)|0,o=o+Math.imul(N,ft)|0;var It=(c+(r=r+Math.imul(I,pt)|0)|0)+((8191&(i=(i=i+Math.imul(I,mt)|0)+Math.imul(T,pt)|0))<<13)|0;c=((o=o+Math.imul(T,mt)|0)+(i>>>13)|0)+(It>>>26)|0,It&=67108863,r=Math.imul(U,ht),i=(i=Math.imul(U,ft))+Math.imul(B,ht)|0,o=Math.imul(B,ft);var Tt=(c+(r=r+Math.imul(L,pt)|0)|0)+((8191&(i=(i=i+Math.imul(L,mt)|0)+Math.imul(N,pt)|0))<<13)|0;c=((o=o+Math.imul(N,mt)|0)+(i>>>13)|0)+(Tt>>>26)|0,Tt&=67108863;var Rt=(c+(r=Math.imul(U,pt))|0)+((8191&(i=(i=Math.imul(U,mt))+Math.imul(B,pt)|0))<<13)|0;return c=((o=Math.imul(B,mt))+(i>>>13)|0)+(Rt>>>26)|0,Rt&=67108863,u[0]=vt,u[1]=gt,u[2]=bt,u[3]=yt,u[4]=wt,u[5]=Mt,u[6]=Et,u[7]=_t,u[8]=kt,u[9]=Ot,u[10]=jt,u[11]=xt,u[12]=St,u[13]=At,u[14]=Ct,u[15]=Pt,u[16]=It,u[17]=Tt,u[18]=Rt,0!==c&&(u[19]=c,n.length++),n};function p(t,e,n){return(new m).mulp(t,e,n)}function m(t,e){this.x=t,this.y=e}Math.imul||(d=f),o.prototype.mulTo=function(t,e){var n=this.length+t.length;return 10===this.length&&10===t.length?d(this,t,e):n<63?f(this,t,e):n<1024?function(t,e,n){n.negative=e.negative^t.negative,n.length=t.length+e.length;for(var r=0,i=0,o=0;o<n.length-1;o++){var a=i;i=0;for(var s=67108863&r,u=Math.min(o,e.length-1),c=Math.max(0,o-t.length+1);c<=u;c++){var l=o-c,h=(0|t.words[l])*(0|e.words[c]),f=67108863&h;s=67108863&(f=f+s|0),i+=(a=(a=a+(h/67108864|0)|0)+(f>>>26)|0)>>>26,a&=67108863}n.words[o]=s,r=a,a=i}return 0!==r?n.words[o]=r:n.length--,n.strip()}(this,t,e):p(this,t,e)},m.prototype.makeRBT=function(t){for(var e=new Array(t),n=o.prototype._countBits(t)-1,r=0;r<t;r++)e[r]=this.revBin(r,n,t);return e},m.prototype.revBin=function(t,e,n){if(0===t||t===n-1)return t;for(var r=0,i=0;i<e;i++)r|=(1&t)<<e-i-1,t>>=1;return r},m.prototype.permute=function(t,e,n,r,i,o){for(var a=0;a<o;a++)r[a]=e[t[a]],i[a]=n[t[a]]},m.prototype.transform=function(t,e,n,r,i,o){this.permute(o,t,e,n,r,i);for(var a=1;a<i;a<<=1)for(var s=a<<1,u=Math.cos(2*Math.PI/s),c=Math.sin(2*Math.PI/s),l=0;l<i;l+=s)for(var h=u,f=c,d=0;d<a;d++){var p=n[l+d],m=r[l+d],v=n[l+d+a],g=r[l+d+a],b=h*v-f*g;g=h*g+f*v,v=b,n[l+d]=p+v,r[l+d]=m+g,n[l+d+a]=p-v,r[l+d+a]=m-g,d!==s&&(b=u*h-c*f,f=u*f+c*h,h=b)}},m.prototype.guessLen13b=function(t,e){var n=1|Math.max(e,t),r=1&n,i=0;for(n=n/2|0;n;n>>>=1)i++;return 1<<i+1+r},m.prototype.conjugate=function(t,e,n){if(!(n<=1))for(var r=0;r<n/2;r++){var i=t[r];t[r]=t[n-r-1],t[n-r-1]=i,i=e[r],e[r]=-e[n-r-1],e[n-r-1]=-i}},m.prototype.normalize13b=function(t,e){for(var n=0,r=0;r<e/2;r++){var i=8192*Math.round(t[2*r+1]/e)+Math.round(t[2*r]/e)+n;t[r]=67108863&i,n=i<67108864?0:i/67108864|0}return t},m.prototype.convert13b=function(t,e,n,i){for(var o=0,a=0;a<e;a++)o+=0|t[a],n[2*a]=8191&o,o>>>=13,n[2*a+1]=8191&o,o>>>=13;for(a=2*e;a<i;++a)n[a]=0;r(0===o),r(0===(-8192&o))},m.prototype.stub=function(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=0;return e},m.prototype.mulp=function(t,e,n){var r=2*this.guessLen13b(t.length,e.length),i=this.makeRBT(r),o=this.stub(r),a=new Array(r),s=new Array(r),u=new Array(r),c=new Array(r),l=new Array(r),h=new Array(r),f=n.words;f.length=r,this.convert13b(t.words,t.length,a,r),this.convert13b(e.words,e.length,c,r),this.transform(a,o,s,u,r,i),this.transform(c,o,l,h,r,i);for(var d=0;d<r;d++){var p=s[d]*l[d]-u[d]*h[d];u[d]=s[d]*h[d]+u[d]*l[d],s[d]=p}return this.conjugate(s,u,r),this.transform(s,u,f,o,r,i),this.conjugate(f,o,r),this.normalize13b(f,r),n.negative=t.negative^e.negative,n.length=t.length+e.length,n.strip()},o.prototype.mul=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),p(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){r("number"===typeof t),r(t<67108864);for(var e=0,n=0;n<this.length;n++){var i=(0|this.words[n])*t,o=(67108863&i)+(67108863&e);e>>=26,e+=i/67108864|0,e+=o>>>26,this.words[n]=67108863&o}return 0!==e&&(this.words[n]=e,this.length++),this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=function(t){for(var e=new Array(t.bitLength()),n=0;n<e.length;n++){var r=n/26|0,i=n%26;e[n]=(t.words[r]&1<<i)>>>i}return e}(t);if(0===e.length)return new o(1);for(var n=this,r=0;r<e.length&&0===e[r];r++,n=n.sqr());if(++r<e.length)for(var i=n.sqr();r<e.length;r++,i=i.sqr())0!==e[r]&&(n=n.mul(i));return n},o.prototype.iushln=function(t){r("number"===typeof t&&t>=0);var e,n=t%26,i=(t-n)/26,o=67108863>>>26-n<<26-n;if(0!==n){var a=0;for(e=0;e<this.length;e++){var s=this.words[e]&o,u=(0|this.words[e])-s<<n;this.words[e]=u|a,a=s>>>26-n}a&&(this.words[e]=a,this.length++)}if(0!==i){for(e=this.length-1;e>=0;e--)this.words[e+i]=this.words[e];for(e=0;e<i;e++)this.words[e]=0;this.length+=i}return this.strip()},o.prototype.ishln=function(t){return r(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,n){var i;r("number"===typeof t&&t>=0),i=e?(e-e%26)/26:0;var o=t%26,a=Math.min((t-o)/26,this.length),s=67108863^67108863>>>o<<o,u=n;if(i-=a,i=Math.max(0,i),u){for(var c=0;c<a;c++)u.words[c]=this.words[c];u.length=a}if(0===a);else if(this.length>a)for(this.length-=a,c=0;c<this.length;c++)this.words[c]=this.words[c+a];else this.words[0]=0,this.length=1;var l=0;for(c=this.length-1;c>=0&&(0!==l||c>=i);c--){var h=0|this.words[c];this.words[c]=l<<26-o|h>>>o,l=h&s}return u&&0!==l&&(u.words[u.length++]=l),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(t,e,n){return r(0===this.negative),this.iushrn(t,e,n)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){r("number"===typeof t&&t>=0);var e=t%26,n=(t-e)/26,i=1<<e;return!(this.length<=n)&&!!(this.words[n]&i)},o.prototype.imaskn=function(t){r("number"===typeof t&&t>=0);var e=t%26,n=(t-e)/26;if(r(0===this.negative,"imaskn works only with positive numbers"),this.length<=n)return this;if(0!==e&&n++,this.length=Math.min(n,this.length),0!==e){var i=67108863^67108863>>>e<<e;this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return r("number"===typeof t),r(t<67108864),t<0?this.isubn(-t):0!==this.negative?1===this.length&&(0|this.words[0])<t?(this.words[0]=t-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(t),this.negative=1,this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t;for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++;return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(r("number"===typeof t),r(t<67108864),t<0)return this.iaddn(-t);if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this;if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1;return this.strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,n){var i,o,a=t.length+n;this._expand(a);var s=0;for(i=0;i<t.length;i++){o=(0|this.words[i+n])+s;var u=(0|t.words[i])*e;s=((o-=67108863&u)>>26)-(u/67108864|0),this.words[i+n]=67108863&o}for(;i<this.length-n;i++)s=(o=(0|this.words[i+n])+s)>>26,this.words[i+n]=67108863&o;if(0===s)return this.strip();for(r(-1===s),s=0,i=0;i<this.length;i++)s=(o=-(0|this.words[i])+s)>>26,this.words[i]=67108863&o;return this.negative=1,this.strip()},o.prototype._wordDiv=function(t,e){var n=(this.length,t.length),r=this.clone(),i=t,a=0|i.words[i.length-1];0!==(n=26-this._countBits(a))&&(i=i.ushln(n),r.iushln(n),a=0|i.words[i.length-1]);var s,u=r.length-i.length;if("mod"!==e){(s=new o(null)).length=u+1,s.words=new Array(s.length);for(var c=0;c<s.length;c++)s.words[c]=0}var l=r.clone()._ishlnsubmul(i,1,u);0===l.negative&&(r=l,s&&(s.words[u]=1));for(var h=u-1;h>=0;h--){var f=67108864*(0|r.words[i.length+h])+(0|r.words[i.length+h-1]);for(f=Math.min(f/a|0,67108863),r._ishlnsubmul(i,f,h);0!==r.negative;)f--,r.negative=0,r._ishlnsubmul(i,1,h),r.isZero()||(r.negative^=1);s&&(s.words[h]=f)}return s&&s.strip(),r.strip(),"div"!==e&&0!==n&&r.iushrn(n),{div:s||null,mod:r}},o.prototype.divmod=function(t,e,n){return r(!t.isZero()),this.isZero()?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===t.negative?(s=this.neg().divmod(t,e),"mod"!==e&&(i=s.div.neg()),"div"!==e&&(a=s.mod.neg(),n&&0!==a.negative&&a.iadd(t)),{div:i,mod:a}):0===this.negative&&0!==t.negative?(s=this.divmod(t.neg(),e),"mod"!==e&&(i=s.div.neg()),{div:i,mod:s.mod}):0!==(this.negative&t.negative)?(s=this.neg().divmod(t.neg(),e),"div"!==e&&(a=s.mod.neg(),n&&0!==a.negative&&a.isub(t)),{div:s.div,mod:a}):t.length>this.length||this.cmp(t)<0?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modn(t.words[0]))}:this._wordDiv(t,e);var i,a,s},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t);if(e.mod.isZero())return e.div;var n=0!==e.div.negative?e.mod.isub(t):e.mod,r=t.ushrn(1),i=t.andln(1),o=n.cmp(r);return o<0||1===i&&0===o?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modn=function(t){r(t<=67108863);for(var e=(1<<26)%t,n=0,i=this.length-1;i>=0;i--)n=(e*n+(0|this.words[i]))%t;return n},o.prototype.idivn=function(t){r(t<=67108863);for(var e=0,n=this.length-1;n>=0;n--){var i=(0|this.words[n])+67108864*e;this.words[n]=i/t|0,e=i%t}return this.strip()},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){r(0===t.negative),r(!t.isZero());var e=this,n=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i=new o(1),a=new o(0),s=new o(0),u=new o(1),c=0;e.isEven()&&n.isEven();)e.iushrn(1),n.iushrn(1),++c;for(var l=n.clone(),h=e.clone();!e.isZero();){for(var f=0,d=1;0===(e.words[0]&d)&&f<26;++f,d<<=1);if(f>0)for(e.iushrn(f);f-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(l),a.isub(h)),i.iushrn(1),a.iushrn(1);for(var p=0,m=1;0===(n.words[0]&m)&&p<26;++p,m<<=1);if(p>0)for(n.iushrn(p);p-- >0;)(s.isOdd()||u.isOdd())&&(s.iadd(l),u.isub(h)),s.iushrn(1),u.iushrn(1);e.cmp(n)>=0?(e.isub(n),i.isub(s),a.isub(u)):(n.isub(e),s.isub(i),u.isub(a))}return{a:s,b:u,gcd:n.iushln(c)}},o.prototype._invmp=function(t){r(0===t.negative),r(!t.isZero());var e=this,n=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i,a=new o(1),s=new o(0),u=n.clone();e.cmpn(1)>0&&n.cmpn(1)>0;){for(var c=0,l=1;0===(e.words[0]&l)&&c<26;++c,l<<=1);if(c>0)for(e.iushrn(c);c-- >0;)a.isOdd()&&a.iadd(u),a.iushrn(1);for(var h=0,f=1;0===(n.words[0]&f)&&h<26;++h,f<<=1);if(h>0)for(n.iushrn(h);h-- >0;)s.isOdd()&&s.iadd(u),s.iushrn(1);e.cmp(n)>=0?(e.isub(n),a.isub(s)):(n.isub(e),s.isub(a))}return(i=0===e.cmpn(1)?a:s).cmpn(0)<0&&i.iadd(t),i},o.prototype.gcd=function(t){if(this.isZero())return t.abs();if(t.isZero())return this.abs();var e=this.clone(),n=t.clone();e.negative=0,n.negative=0;for(var r=0;e.isEven()&&n.isEven();r++)e.iushrn(1),n.iushrn(1);for(;;){for(;e.isEven();)e.iushrn(1);for(;n.isEven();)n.iushrn(1);var i=e.cmp(n);if(i<0){var o=e;e=n,n=o}else if(0===i||0===n.cmpn(1))break;e.isub(n)}return n.iushln(r)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return 0===(1&this.words[0])},o.prototype.isOdd=function(){return 1===(1&this.words[0])},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){r("number"===typeof t);var e=t%26,n=(t-e)/26,i=1<<e;if(this.length<=n)return this._expand(n+1),this.words[n]|=i,this;for(var o=i,a=n;0!==o&&a<this.length;a++){var s=0|this.words[a];o=(s+=o)>>>26,s&=67108863,this.words[a]=s}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e,n=t<0;if(0!==this.negative&&!n)return-1;if(0===this.negative&&n)return 1;if(this.strip(),this.length>1)e=1;else{n&&(t=-t),r(t<=67108863,"Number is too big");var i=0|this.words[0];e=i===t?0:i<t?-1:1}return 0!==this.negative?0|-e:e},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return-1;if(0===this.negative&&0!==t.negative)return 1;var e=this.ucmp(t);return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1;if(this.length<t.length)return-1;for(var e=0,n=this.length-1;n>=0;n--){var r=0|this.words[n],i=0|t.words[n];if(r!==i){r<i?e=-1:r>i&&(e=1);break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return-1===this.cmpn(t)},o.prototype.lt=function(t){return-1===this.cmp(t)},o.prototype.lten=function(t){return this.cmpn(t)<=0},o.prototype.lte=function(t){return this.cmp(t)<=0},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new E(t)},o.prototype.toRed=function(t){return r(!this.red,"Already a number in reduction context"),r(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return r(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return r(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return r(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return r(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return r(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return r(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return r(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return r(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return r(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return r(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return r(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return r(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return r(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)};var v={k256:null,p224:null,p192:null,p25519:null};function g(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function b(){g.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function y(){g.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function w(){g.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function M(){g.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function E(t){if("string"===typeof t){var e=o._prime(t);this.m=e.p,this.prime=e}else r(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function _(t){E.call(this,t),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}g.prototype._tmp=function(){var t=new o(null);return t.words=new Array(Math.ceil(this.n/13)),t},g.prototype.ireduce=function(t){var e,n=t;do{this.split(n,this.tmp),e=(n=(n=this.imulK(n)).iadd(this.tmp)).bitLength()}while(e>this.n);var r=e<this.n?-1:n.ucmp(this.p);return 0===r?(n.words[0]=0,n.length=1):r>0?n.isub(this.p):void 0!==n.strip?n.strip():n._strip(),n},g.prototype.split=function(t,e){t.iushrn(this.n,0,e)},g.prototype.imulK=function(t){return t.imul(this.k)},i(b,g),b.prototype.split=function(t,e){for(var n=4194303,r=Math.min(t.length,9),i=0;i<r;i++)e.words[i]=t.words[i];if(e.length=r,t.length<=9)return t.words[0]=0,void(t.length=1);var o=t.words[9];for(e.words[e.length++]=o&n,i=10;i<t.length;i++){var a=0|t.words[i];t.words[i-10]=(a&n)<<4|o>>>22,o=a}o>>>=22,t.words[i-10]=o,0===o&&t.length>10?t.length-=10:t.length-=9},b.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2;for(var e=0,n=0;n<t.length;n++){var r=0|t.words[n];e+=977*r,t.words[n]=67108863&e,e=64*r+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},i(y,g),i(w,g),i(M,g),M.prototype.imulK=function(t){for(var e=0,n=0;n<t.length;n++){var r=19*(0|t.words[n])+e,i=67108863&r;r>>>=26,t.words[n]=i,e=r}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function(t){if(v[t])return v[t];var e;if("k256"===t)e=new b;else if("p224"===t)e=new y;else if("p192"===t)e=new w;else{if("p25519"!==t)throw new Error("Unknown prime "+t);e=new M}return v[t]=e,e},E.prototype._verify1=function(t){r(0===t.negative,"red works only with positives"),r(t.red,"red works only with red numbers")},E.prototype._verify2=function(t,e){r(0===(t.negative|e.negative),"red works only with positives"),r(t.red&&t.red===e.red,"red works only with red numbers")},E.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):t.umod(this.m)._forceRed(this)},E.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},E.prototype.add=function(t,e){this._verify2(t,e);var n=t.add(e);return n.cmp(this.m)>=0&&n.isub(this.m),n._forceRed(this)},E.prototype.iadd=function(t,e){this._verify2(t,e);var n=t.iadd(e);return n.cmp(this.m)>=0&&n.isub(this.m),n},E.prototype.sub=function(t,e){this._verify2(t,e);var n=t.sub(e);return n.cmpn(0)<0&&n.iadd(this.m),n._forceRed(this)},E.prototype.isub=function(t,e){this._verify2(t,e);var n=t.isub(e);return n.cmpn(0)<0&&n.iadd(this.m),n},E.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},E.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},E.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},E.prototype.isqr=function(t){return this.imul(t,t.clone())},E.prototype.sqr=function(t){return this.mul(t,t)},E.prototype.sqrt=function(t){if(t.isZero())return t.clone();var e=this.m.andln(3);if(r(e%2===1),3===e){var n=this.m.add(new o(1)).iushrn(2);return this.pow(t,n)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1);r(!i.isZero());var s=new o(1).toRed(this),u=s.redNeg(),c=this.m.subn(1).iushrn(1),l=this.m.bitLength();for(l=new o(2*l*l).toRed(this);0!==this.pow(l,c).cmp(u);)l.redIAdd(u);for(var h=this.pow(l,i),f=this.pow(t,i.addn(1).iushrn(1)),d=this.pow(t,i),p=a;0!==d.cmp(s);){for(var m=d,v=0;0!==m.cmp(s);v++)m=m.redSqr();r(v<p);var g=this.pow(h,new o(1).iushln(p-v-1));f=f.redMul(g),h=g.redSqr(),d=d.redMul(h),p=v}return f},E.prototype.invm=function(t){var e=t._invmp(this.m);return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},E.prototype.pow=function(t,e){if(e.isZero())return new o(1).toRed(this);if(0===e.cmpn(1))return t.clone();var n=new Array(16);n[0]=new o(1).toRed(this),n[1]=t;for(var r=2;r<n.length;r++)n[r]=this.mul(n[r-1],t);var i=n[0],a=0,s=0,u=e.bitLength()%26;for(0===u&&(u=26),r=e.length-1;r>=0;r--){for(var c=e.words[r],l=u-1;l>=0;l--){var h=c>>l&1;i!==n[0]&&(i=this.sqr(i)),0!==h||0!==a?(a<<=1,a|=h,(4===++s||0===r&&0===l)&&(i=this.mul(i,n[a]),s=0,a=0)):s=0}u=26}return i},E.prototype.convertTo=function(t){var e=t.umod(this.m);return e===t?e.clone():e},E.prototype.convertFrom=function(t){var e=t.clone();return e.red=null,e},o.mont=function(t){return new _(t)},i(_,E),_.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},_.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv));return e.red=null,e},_.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t;var n=t.imul(e),r=n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=n.isub(r).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},_.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this);var n=t.mul(e),r=n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=n.isub(r).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},_.prototype.invm=function(t){return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)}}(t,this)}).call(this,n("LY0y")(t))},vNVm:function(t,e,n){"use strict";var r=n("J4zp"),i=n("TqRt");e.__esModule=!0,e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!s,i=(0,o.useRef)(),c=(0,o.useState)(!1),l=r(c,2),h=l[0],f=l[1],d=(0,o.useCallback)((function(t){i.current&&(i.current(),i.current=void 0),n||h||t&&t.tagName&&(i.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=u.get(e);if(n)return n;var r=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return u.set(e,n={id:e,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(t,e),o.observe(t),function(){a.delete(t),o.unobserve(t),0===a.size&&(o.disconnect(),u.delete(i))}}(t,(function(t){return t&&f(t)}),{rootMargin:e}))}),[n,e,h]);return(0,o.useEffect)((function(){s||h||(0,a.default)((function(){return f(!0)}))}),[h]),[d,h]};var o=n("q1tI"),a=i(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var u=new Map},vZ2G:function(t,e){t.exports=function(t){for(var e,n=t.length;n--;){if(255!==(e=t.readUInt8(n))){e++,t.writeUInt8(e,n);break}t.writeUInt8(0,n)}}},w8CP:function(t,e,n){"use strict";var r=n("2j6C"),i=n("P7XM");function o(t,e){return 55296===(64512&t.charCodeAt(e))&&(!(e<0||e+1>=t.length)&&56320===(64512&t.charCodeAt(e+1)))}function a(t){return(t>>>24|t>>>8&65280|t<<8&16711680|(255&t)<<24)>>>0}function s(t){return 1===t.length?"0"+t:t}function u(t){return 7===t.length?"0"+t:6===t.length?"00"+t:5===t.length?"000"+t:4===t.length?"0000"+t:3===t.length?"00000"+t:2===t.length?"000000"+t:1===t.length?"0000000"+t:t}e.inherits=i,e.toArray=function(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var n=[];if("string"===typeof t)if(e){if("hex"===e)for((t=t.replace(/[^a-z0-9]+/gi,"")).length%2!==0&&(t="0"+t),i=0;i<t.length;i+=2)n.push(parseInt(t[i]+t[i+1],16))}else for(var r=0,i=0;i<t.length;i++){var a=t.charCodeAt(i);a<128?n[r++]=a:a<2048?(n[r++]=a>>6|192,n[r++]=63&a|128):o(t,i)?(a=65536+((1023&a)<<10)+(1023&t.charCodeAt(++i)),n[r++]=a>>18|240,n[r++]=a>>12&63|128,n[r++]=a>>6&63|128,n[r++]=63&a|128):(n[r++]=a>>12|224,n[r++]=a>>6&63|128,n[r++]=63&a|128)}else for(i=0;i<t.length;i++)n[i]=0|t[i];return n},e.toHex=function(t){for(var e="",n=0;n<t.length;n++)e+=s(t[n].toString(16));return e},e.htonl=a,e.toHex32=function(t,e){for(var n="",r=0;r<t.length;r++){var i=t[r];"little"===e&&(i=a(i)),n+=u(i.toString(16))}return n},e.zero2=s,e.zero8=u,e.join32=function(t,e,n,i){var o=n-e;r(o%4===0);for(var a=new Array(o/4),s=0,u=e;s<a.length;s++,u+=4){var c;c="big"===i?t[u]<<24|t[u+1]<<16|t[u+2]<<8|t[u+3]:t[u+3]<<24|t[u+2]<<16|t[u+1]<<8|t[u],a[s]=c>>>0}return a},e.split32=function(t,e){for(var n=new Array(4*t.length),r=0,i=0;r<t.length;r++,i+=4){var o=t[r];"big"===e?(n[i]=o>>>24,n[i+1]=o>>>16&255,n[i+2]=o>>>8&255,n[i+3]=255&o):(n[i+3]=o>>>24,n[i+2]=o>>>16&255,n[i+1]=o>>>8&255,n[i]=255&o)}return n},e.rotr32=function(t,e){return t>>>e|t<<32-e},e.rotl32=function(t,e){return t<<e|t>>>32-e},e.sum32=function(t,e){return t+e>>>0},e.sum32_3=function(t,e,n){return t+e+n>>>0},e.sum32_4=function(t,e,n,r){return t+e+n+r>>>0},e.sum32_5=function(t,e,n,r,i){return t+e+n+r+i>>>0},e.sum64=function(t,e,n,r){var i=t[e],o=r+t[e+1]>>>0,a=(o<r?1:0)+n+i;t[e]=a>>>0,t[e+1]=o},e.sum64_hi=function(t,e,n,r){return(e+r>>>0<e?1:0)+t+n>>>0},e.sum64_lo=function(t,e,n,r){return e+r>>>0},e.sum64_4_hi=function(t,e,n,r,i,o,a,s){var u=0,c=e;return u+=(c=c+r>>>0)<e?1:0,u+=(c=c+o>>>0)<o?1:0,t+n+i+a+(u+=(c=c+s>>>0)<s?1:0)>>>0},e.sum64_4_lo=function(t,e,n,r,i,o,a,s){return e+r+o+s>>>0},e.sum64_5_hi=function(t,e,n,r,i,o,a,s,u,c){var l=0,h=e;return l+=(h=h+r>>>0)<e?1:0,l+=(h=h+o>>>0)<o?1:0,l+=(h=h+s>>>0)<s?1:0,t+n+i+a+u+(l+=(h=h+c>>>0)<c?1:0)>>>0},e.sum64_5_lo=function(t,e,n,r,i,o,a,s,u,c){return e+r+o+s+c>>>0},e.rotr64_hi=function(t,e,n){return(e<<32-n|t>>>n)>>>0},e.rotr64_lo=function(t,e,n){return(t<<32-n|e>>>n)>>>0},e.shr64_hi=function(t,e,n){return t>>>n},e.shr64_lo=function(t,e,n){return(t<<32-n|e>>>n)>>>0}},wOhW:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("g4pe"),a=n.n(o),s=n("20a2"),u=n("vOnD"),c=n("/MKj"),l=n("VX74"),h=n("nShV"),f=n("8CDE"),d=n("h4VS"),p=n("hYBG"),m=n("QUga"),v=n("ZeZO"),g=n("feIE"),b=i.a.createElement;function y(){var t=Object(d.a)(["\n  background: white;\n  border-radius: 50%;\n  border: none;\n\n  &:hover {\n    background: white;\n    border: none;\n  }\n"]);return y=function(){return t},t}function w(){var t=Object(d.a)(["\n      background: ",";\n    "]);return w=function(){return t},t}function M(){var t=Object(d.a)(["\n  align-items: center;\n  justify-content: space-between;\n  width: 320px;\n  cursor: pointer;\n  background: white;\n  border: var(--surface-border);\n  border-radius: var(--surface-border-radius);\n  box-shadow: var(--surface-shadow);\n  padding: var(--default-gap) calc(var(--default-gap) + 5px);\n  transition: opacity 150ms ease;\n\n  ","\n\n  &:hover {\n    opacity: 0.85;\n  }\n\n  "," {\n    color: white;\n  }\n\n  &.fade-enter {\n    opacity: 0;\n  }\n\n  &.fade-enter-active {\n    opacity: 1;\n    transition: opacity 100ms, blur 100ms;\n  }\n\n  &.fade-exit {\n    opacity: 1;\n  }\n\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 100ms, blur 100ms;\n  }\n"]);return M=function(){return t},t}var E=function(t,e){return"success"===t?"color"===e?"green":"icon"===e?"check":"var(--default-color-green)":"warning"===t?"color"===e?"orange":"icon"===e?"danger":"var(--default-color-orange)":"color"===e?"red":"icon"===e?"danger":"var(--default-color-red)"},_=Object(u.c)(h.b)(M(),(function(t){var e=t.type;return e&&Object(u.b)(w(),E(e))}),m.a),k=Object(u.c)(v.a)(y()),O=function(t){var e=t.type,n=t.message,r=t.style,i=t.className,o=t.onRemove;return b(p.a,{in:!0,appear:!0,animation:"fade"},b(_,{type:e,className:i,style:r,onClick:o},b(m.b,null,n),b(k,{kind:"icon",size:"xs"},b(g.a,{icon:E(e,"icon"),stroke:E(e),size:"xs"}))))},j=i.a.createElement;function x(){var t=Object(d.a)(["\n  position: fixed;\n  left: calc(50% - 185px);\n  bottom: 0;\n  z-index: var(--z-override);\n  padding: 25px;\n  max-height: 768px;\n  overflow-y: auto;\n"]);return x=function(){return t},t}var S=Object(u.c)(f.a)(x()),A=function(t){var e=t.snacks,n=t.onRemove,i=Object(r.useState)([]),o=i[0],a=i[1],s=function(t){n&&n(t),a((function(e){return e.filter((function(e){return e.id!==t.id}))}))};return j(S,null,(e||o).map((function(t){return j(O,{key:t.id,type:t.type,message:t.message,onRemove:function(){return s(t)}})})))};A.defaultProps={snacks:[]};var C=A,P=n("DTT8"),I=n("auMy"),T=n("wx14"),R=n("Ff2n"),L=n("k82f"),N=n.n(L),D=i.a.createElement;function U(){var t=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n"]);return U=function(){return t},t}function B(){var t=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n\n  &.slide-left-enter,\n  &.slide-left-appear {\n    "," {\n      opacity: 0;\n    }\n\n    "," {\n      transform: translateX(-100%);\n    }\n\n    "," {\n      opacity: 0;\n    }\n  }\n\n  &.slide-left-enter-active,\n  &.slide-left-appear-active {\n    "," {\n      opacity: 1;\n    }\n\n    "," {\n      transform: initial;\n      transition-delay: 150ms;\n    }\n\n    "," {\n      opacity: 1;\n    }\n  }\n\n  &.slide-left-exit {\n    "," {\n      opacity: 1;\n    }\n\n    "," {\n      transform: initial;\n    }\n\n    "," {\n      opacity: 1;\n    }\n  }\n\n  &.slide-left-exit-active {\n    "," {\n      opacity: 0;\n    }\n\n    "," {\n      transform: translateX(-100%);\n    }\n\n    "," {\n      opacity: 0;\n    }\n  }\n\n  &.slide-right-enter,\n  &.slide-right-appear {\n    "," {\n      opacity: 0;\n    }\n\n    "," {\n      transform: translateX(100%);\n    }\n\n    "," {\n      opacity: 0;\n    }\n  }\n\n  &.slide-right-enter-active,\n  &.slide-right-appear-active {\n    "," {\n      opacity: 1;\n    }\n\n    "," {\n      transform: initial;\n      transition-delay: 150ms;\n    }\n\n    "," {\n      opacity: 1;\n    }\n  }\n\n  &.slide-right-exit {\n    "," {\n      opacity: 1;\n    }\n\n    "," {\n      transform: initial;\n    }\n\n    "," {\n      opacity: 1;\n    }\n  }\n\n  &.slide-right-exit-active {\n    "," {\n      opacity: 0;\n    }\n\n    "," {\n      transform: translateX(100%);\n    }\n\n    "," {\n      opacity: 0;\n    }\n  }\n"]);return B=function(){return t},t}function z(){var t=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: var(--default-gap);\n  min-height: 100%;\n"]);return z=function(){return t},t}function F(){var t=Object(d.a)(["\n  position: absolute;\n  top: 40px;\n  right: calc(100% + 30px);\n  z-index: var(--z-15);\n  width: 40px;\n  cursor: pointer;\n  transform: translateY(-50%);\n  transition: opacity 0.3s;\n\n  @media only screen and (max-width: 1098px) {\n    right: calc(100% + 12px);\n  }\n\n  @media only screen and (max-width: 480px) {\n    display: none;\n  }\n"]);return F=function(){return t},t}function V(){var t=Object(d.a)(["\n      width: 196px;\n      margin-left: 0;\n    "]);return V=function(){return t},t}function q(){var t=Object(d.a)(["\n        width: 196px;\n      "]);return q=function(){return t},t}function H(){var t=Object(d.a)(["\n        width: 196px;\n      "]);return H=function(){return t},t}function W(){var t=Object(d.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  max-width: 989px;\n  height: 100vh;\n  background: white;\n  transition: transform 0.3s;\n\n  @media only screen and (max-width: 1098px) {\n    width: calc(100% - 60px);\n\n    ","\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: 100%;\n\n    ","\n  }\n\n  ","\n"]);return W=function(){return t},t}function G(){var t=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--default-color-overlay);\n  transition: opacity 0.2s;\n"]);return G=function(){return t},t}var Z=u.c.div(G()),$=u.c.div(W(),(function(t){return t.half&&Object(u.b)(H())}),(function(t){return t.half&&Object(u.b)(q())}),(function(t){return t.half&&Object(u.b)(V())})),K=Object(u.c)(g.a)(F()),Y=u.c.div(z()),Q=u.c.div(B(),Z,$,K,Z,$,K,Z,$,K,Z,$,K,Z,$,K,Z,$,K,Z,$,K,Z,$,K),X=u.c.div(U()),J=function(t){var e=t.children,n=t.side,i=t.half,o=t.isOpen,a=t.onBack,s=Object(R.a)(t,["children","side","half","isOpen","onBack"]);return D(p.a,Object(T.a)({in:o,timeout:{appear:500,enter:500,exit:300},animation:"right"===n?"slide-right":"slide-left",unmountOnExit:!0,appear:!0},s),D(Q,s,D(Z,{onClick:a}),D($,{half:i},D(K,{onClick:a,icon:"arrowLeft",size:64,stroke:"white"}),D(N.a,null,D(Y,null,D(r.Suspense,{fallback:D(X,null,D(I.a,null))},e))))))},tt=n("RKiZ"),et=n("KQm4"),nt=n("7sPp"),rt=i.a.createElement;function it(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return ot(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ot(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function at(){var t=Object(d.a)(["\n  text-align: center;\n  width: 100%;\n\n  @media only screen and (max-width: 480px) {\n    font-size: var(--font-size-l);\n  }\n"]);return at=function(){return t},t}function st(){var t=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  left: 10px;\n  height: 100%;\n"]);return st=function(){return t},t}function ut(){var t=Object(d.a)(["\n  position: relative;\n  display: flex;\n  border-bottom: var(--default-border);\n  padding: var(--default-gap);\n  line-height: 1;\n"]);return ut=function(){return t},t}function ct(){var t=Object(d.a)(["\n      top: 5%;\n      min-width: 65%;\n    "]);return ct=function(){return t},t}function lt(){var t=Object(d.a)(["\n  position: relative;\n  top: 15%;\n  left: 0;\n  right: 0;\n  z-index: var(--z-101);\n\n  min-width: 480px;\n  max-width: 80%;\n  width: min-content;\n\n  margin-block-end: 150px;\n  background: var(--surface-background);\n  border: var(--surface-border);\n  border-radius: var(--surface-border-radius);\n  box-shadow: var(--surface-shadow);\n\n  &.swing-enter {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n\n  &.swing-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: opacity 100ms, transform 100ms;\n  }\n\n  &.swing-exit {\n    opacity: 1;\n  }\n\n  &.swing-exit-active {\n    opacity: 0;\n    transform: scale(0.9);\n    transition: opacity 100ms, transform 100ms;\n  }\n\n  ","\n\n  @media only screen and (max-width: 768px) {\n    min-width: 320px;\n  }\n\n  @media only screen and (max-width: 480px) {\n    min-width: 285px;\n    max-width: 100%;\n    width: auto;\n    margin: 0 var(--default-gap);\n  }\n"]);return lt=function(){return t},t}function ht(){var t=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: var(--z-100);\n  background: var(--default-color-overlay);\n  cursor: pointer;\n"]);return ht=function(){return t},t}function ft(){var t=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: var(--z-override);\n  overflow: auto;\n\n  &.fade-enter {\n    opacity: 0;\n  }\n\n  &.fade-enter-active {\n    opacity: 1;\n    transition: opacity 100ms, blur 100ms;\n  }\n\n  &.fade-exit {\n    opacity: 1;\n  }\n\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 100ms, blur 100ms;\n  }\n"]);return ft=function(){return t},t}var dt=100;function pt(t){return t&&0!==t.length?t[t.length-1]:null}var mt=u.c.div(ft()),vt=u.c.div(ht()),gt=u.c.div(lt(),(function(t){return"l"===t.size&&Object(u.b)(ct())})),bt=u.c.div(ut()),yt=Object(u.c)(v.a)(st()),wt=Object(u.c)(nt.a)(at()),Mt=function(t){var e=t.children;if(!e)return null;var n,r=t.path,i=null,o=it(e);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(r===a.props.path){i=a;break}}}catch(s){o.e(s)}finally{o.f()}return i},Et=function(t){var e=t.component,n=t.close,r=t.back,i=t.jump;return rt(e,{close:n,back:r,jump:i})},_t=function(t){var e=t.size,n=t.routes,i=t.closeByBackground,o=t.onHide,a=Object(r.useState)(["/"]),s=a[0],u=a[1],c=Object(r.useState)(!1),l=c[0],h=c[1],f=Object(r.useState)(null),d=f[0],m=f[1],v={fade:{in:!!n,animation:"fade",onEnter:function(){return h(!0)},onExited:function(){return h(!1)},timeout:dt},swing:{in:l,animation:"swing",timeout:dt}},b=function(){var t;return(null===n||void 0===n||null===(t=n.find((function(t){return function(t){return t.path===pt(s)}(t)})))||void 0===t?void 0:t.title)||""},y=function(){m("slideOutRight"),setTimeout((function(){u(Object(et.a)(s.filter((function(t,e){return e!==s.length-1})))),m("slideInLeft")}),dt)},w=function(t){m("slideOutLeft"),setTimeout((function(){u([].concat(Object(et.a)(s),[t])),m("slideInRight")}),dt)},M=function(){h(!1),m(null),setTimeout((function(){u(["/"]),o()}),dt)};return Object(r.useEffect)((function(){if(n&&n.length>0){var t=n.find((function(t){return t.home}));u([(null===t||void 0===t?void 0:t.path)||"/"])}}),[n]),rt(p.a,v.fade,rt(mt,null,rt(vt,{className:i?"":"clear",onClick:i?M:function(){}}),rt(p.a,v.swing,rt(gt,{className:"animate".concat(d?" ".concat(d):""),size:e},b()&&rt(bt,null,s.length>1&&function(){var t,e={back:!0},r=s[s.length-1],i=n.find((function(t){return t.path===r}));return i&&null!==(t=null===i||void 0===i?void 0:i.back)&&void 0!==t?t:e}().back&&rt(yt,{onClick:y,appearance:"clear"},rt(g.a,{icon:"arrowLeft"})),rt(wt,{tag:"h3"},b())),rt(Mt,{path:pt(s)},(n||[]).map((function(t,e){return rt(Et,Object(T.a)({key:e},t,{close:M,back:y,jump:w}))})))))))};_t.defaultProps={title:"Modal Title",routes:[],onHide:function(){},closeByBackground:!0};var kt=_t,Ot=n("8UhZ"),jt=n("586Q"),xt=n("9Xo6"),St=n("8ihE"),At=n("Ztxg"),Ct=n("qOKH"),Pt=n("Sza6"),It=n("u2Cb"),Tt=n("rOcY");const Rt=Object(u.c)(f.a).withConfig({displayName:"main__Container",componentId:"r90a11-0"})(["height:100%;flex-grow:1;&.fade-enter{opacity:0;}&.fade-enter-active{opacity:1;transition:opacity 100ms,blur 100ms;}&.fade-exit{opacity:1;}&.fade-exit-active{opacity:0;transition:opacity 100ms,blur 100ms;}"]),Lt=u.c.img.withConfig({displayName:"main__BrandLogo",componentId:"r90a11-1"})(["object-fit:contain;width:100%;height:100%;"]),Nt=Object(u.c)(h.b).withConfig({displayName:"main__Header",componentId:"r90a11-2"})(["display:flex;grid-gap:var(--default-gap);"]),Dt=Object(u.c)(v.a).withConfig({displayName:"main__GuideButton",componentId:"r90a11-3"})(["display:flex;justify-content:center;align-items:center;color:var(--default-color-accent);"]),Ut=Object(u.c)(v.a).withConfig({displayName:"main__BackButton",componentId:"r90a11-4"})(["display:none;@media only screen and (max-width:480px){display:flex;justify-content:center;align-items:center;}"]),Bt=({close:t})=>{const e=Object(s.useRouter)();return i.a.createElement(f.a,{style:{padding:"15px"}},i.a.createElement(m.b,null,"Atomic - \u0441\u0432\u043e\u0435\u043e\u0431\u0440\u0430\u0437\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044f\u043c\u0438 \u0438\u043d\u0434\u0443\u0441\u0442\u0440\u0438\u0438. \u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0438 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u043e\u0432, \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0442\u044c \u0438\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u044b \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u043e\u0431\u0449\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u0438 \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u043d\u0430 \u043b\u044e\u0431\u044b\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430\u0445."),i.a.createElement(v.a,{onClick:t},"\u0412\u043f\u0435\u0440\u0435\u0434!"),i.a.createElement(tt.a,{clear:!0}),i.a.createElement(Dt,{onClick:()=>(t(),e.push("/guide")),appearance:"clear"},"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"))},zt=({mutation:t,variables:e,callback:n})=>{const[i]=Object(l.useMutation)(t),o=Object(c.b)();return Object(r.useEffect)((()=>{(async function(){const t=await i({variables:e});o(Object(Pt.k)(null,null)),n&&await n(t)})().then()}),[i,o,e,n]),null};e.a=({children:t})=>{var e;const n=Object(s.useRouter)(),{useDetectQuery:o}=Object(Ot.a)(),[u,{data:h,loading:f}]=Object(l.useLazyQuery)(It.a.GET_USER),{data:d,loading:p}=Object(l.useQuery)(It.a.GET_META),{root:m,user:b,drawer:y,snacks:w,modal:M}=Object(c.c)((t=>t)),E=Object(c.b)(),_=async()=>{await n.push({pathname:n.pathname,query:{}},void 0,{shallow:!0}),E(Object(At.a)(null))};return Object(r.useEffect)((()=>{!p&&null!==d&&void 0!==d&&d.getDashboardSettings&&E(Object(Pt.o)(null===d||void 0===d?void 0:d.getDashboardSettings))}),[d,p]),Object(r.useEffect)((()=>{(null===w||void 0===w?void 0:w.length)>0&&setTimeout((()=>E(Object(xt.a)())),3e3)}),[w]),Object(r.useEffect)((()=>{localStorage.getItem(Tt.a.get("secret"))&&u()}),[]),Object(r.useEffect)((()=>{h&&h.getUser&&E(Object(St.d)(h.getUser))}),[h,E]),Object(r.useEffect)((()=>{b.authenticated&&b.register&&E(Object(Ct.a)([{path:"/",title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",component:({close:t})=>i.a.createElement(Bt,{close:t})}]))}),[b,E]),o(),i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,null,i.a.createElement("title",null,m.settings.meta.title),i.a.createElement("meta",{name:"description",content:m.settings.meta.description})),f?i.a.createElement(jt.a,null,i.a.createElement(I.a,null)):t,i.a.createElement(J,{key:y.history.length,side:y.side,half:y.half,isOpen:y.open,onBack:_},i.a.createElement(Rt,null,i.a.createElement(Nt,null,"left"===y.side&&y.half?i.a.createElement(v.a,{appearance:"clear",onClick:()=>n.push("/")},i.a.createElement(Lt,{src:null===(e=m.settings.general.logotype)||void 0===e?void 0:e.path,alt:"Logotype"})):i.a.createElement(Ut,{size:"s",kind:"icon",onClick:_,revert:!0},i.a.createElement(g.a,{icon:"arrowLeft",size:"s",stroke:"var(--default-color-accent)"})),y.title&&i.a.createElement(P.b,{color:y.color,icon:y.icon,text:y.title})),y.title&&i.a.createElement(tt.a,{clear:!0}),y.content)),i.a.createElement(C,{snacks:w,onRemove:t=>E(Object(xt.b)(t.id))}),i.a.createElement(kt,{size:null===M||void 0===M?void 0:M.size,routes:null===M||void 0===M?void 0:M.routes,onHide:()=>{E(Object(Ct.a)(null))}}),m.mutation&&i.a.createElement(zt,{mutation:m.mutation,variables:m.variables,callback:m.callback}))}},wRn4:function(t,e,n){var r=n("jIre");e.encrypt=function(t,e){var n=r(e,t._prev);return t._prev=t._cipher.encryptBlock(n),t._prev},e.decrypt=function(t,e){var n=t._prev;t._prev=e;var i=t._cipher.decryptBlock(e);return r(i,n)}},wZgm:function(t,e,n){"use strict";var r=n("ODXe"),i=n("h4VS"),o=n("q1tI"),a=n.n(o),s=n("vOnD"),u=function(t,e){var n=new Date(t,e,1),r=[],i=n.getDay(),o=0;for(o=0===i?6:i-1;o>0;)r.push(null),o-=1;for(;n.getMonth()===e;)r.push(new Date(n)),n.setDate(n.getDate()+1);return r},c=function(t){return 0!==t.getDay()&&6!==t.getDay()},l=function(t){return t&&new Date(t)||null},h=function(t){var e;return t&&(null===(e=new Date(t))||void 0===e?void 0:e.toLocaleDateString())||null},f=function(t){var e=Object(o.useRef)(null),n=Object(o.useCallback)((function(n){e.current&&!e.current.contains(n.target)&&t()}),[e,t]);return Object(o.useEffect)((function(){return window.addEventListener("click",n),function(){window.removeEventListener("click",n)}}),[n]),[e]},d=n("hYBG"),p=n("7Cbv"),m=n("8Esz"),v=a.a.createElement;function g(){var t=Object(i.a)(["\n        color: var(--cell-color);\n        background: var(--default-color-accent);\n\n        i {\n          background: var(--cell-color);\n        }\n      "]);return g=function(){return t},t}function b(){var t=Object(i.a)(["\n        color: var(--default-color-accent);\n        background: transparent;\n        border: 1px solid var(--default-color-accent);\n\n        i {\n          display: none;\n        }\n      "]);return b=function(){return t},t}function y(){var t=Object(i.a)(["\n  --cell-size: 35px;\n  --cell-offset: 2.5px;\n  --cell-color: #fff;\n  --badge-size: 5px;\n  --badge-bottom-offset: 2px;\n  --side-left-radius: 10rem 0 0 10rem;\n  --side-right-radius: 0 10rem 10rem 0;\n  --transition: all 150ms ease;\n\n  display: flex;\n  align-items: center;\n\n  align-self: center;\n  justify-content: center;\n\n  width: var(--cell-size);\n  height: var(--cell-size);\n\n  margin: var(--cell-offset) 0;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  outline: none;\n  transition: var(--transition);\n  justify-self: center;\n\n  span {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    width: var(--cell-size);\n    height: var(--cell-size);\n\n    font-size: var(--font-size-s);\n    font-weight: 400;\n    color: var(--default-color-text);\n    border-radius: 50%;\n    transition: var(--transition);\n\n    i {\n      position: absolute;\n      bottom: var(--badge-bottom-offset);\n      width: var(--badge-size);\n      height: var(--badge-size);\n      background: var(--default-color-text);\n      border-radius: 50%;\n    }\n\n    ","\n\n    ","\n  }\n"]);return y=function(){return t},t}var w=s.c.div(y(),(function(t){return t.current&&Object(s.b)(b())}),(function(t){return t.selected&&Object(s.b)(g())})),M=function(t){var e=t.value,n=t.selectedDate,r=t.withMarkers,i=t.onCompare,o=t.onChange,a=[e.getDate(),e.getMonth(),e.getFullYear()],s=a[0],u=a[1],c=a[2],l=[(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear()],h=l[0],f=l[1],d=l[2],p=n&&n&&function(t,e){var n=new Date(t);n.setHours(0,0,0,0);var r=new Date(e);return r.setHours(0,0,0,0),new Date(n).getTime()===new Date(r).getTime()}(e,n);return v(w,{role:"button",tabIndex:0,onMouseDown:o,selected:p,current:h===s&&f===u&&d===c},v("span",null,e.getDate(),r&&i(e)&&v("i",null)))},E=a.a.createElement;function _(){var t=Object(i.a)([""]);return _=function(){return t},t}function k(){var t=Object(i.a)(["\n  display: grid;\n  align-content: center;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, minmax(35px, 35px));\n"]);return k=function(){return t},t}function O(){var t=Object(i.a)(["\n  align-self: center;\n  font-size: var(--size-text-xs);\n  font-weight: 500;\n  color: var(--ghost-color-text);\n  text-transform: uppercase;\n  justify-self: center;\n"]);return O=function(){return t},t}function j(){var t=Object(i.a)(["\n  display: grid;\n  align-content: center;\n  justify-content: center;\n\n  margin-bottom: 10px;\n  user-select: none;\n  grid-template-columns: repeat(auto-fit, minmax(35px, 35px));\n"]);return j=function(){return t},t}function x(){var t=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  font-weight: 700;\n  text-transform: uppercase;\n  user-select: none;\n"]);return x=function(){return t},t}function S(){var t=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 252px;\n"]);return S=function(){return t},t}var A=s.c.div(S()),C=s.c.div(x()),P=s.c.div(j()),I=s.c.div(O()),T=s.c.div(k()),R=s.c.div(_()),L=Object(o.memo)((function(t){var e=t.lang,n=t.month,r=t.value,i=t.filterDate,s=t.setFilterDate,u=t.withNavigate,c=t.withMarkers,l=t.withYearDisplay,h=t.onCompare,f=t.onChange,d=Object(o.useMemo)((function(){return function(t,e){return new Array(7).fill(null).map((function(t,e){return new Date((new Date).getFullYear(),0,e-1)})).map((function(n){return n.toLocaleDateString(t,{weekday:e})}))}(e,"short")}),[e]);return E(A,null,u?E(m.a,{label:E(a.a.Fragment,null,E("span",null,n.label),l&&E("span",null,i.getFullYear())),defaultValue:i,onChange:function(t){return s(new Date(i.getFullYear(),i.getMonth()+t))}}):E(C,null,n.label,l&&r&&E("span",null,new Date(r).getFullYear())),E(P,null,d.map((function(t){return E(I,{key:Object(p.a)()},t)}))),E(T,null,n.days.map((function(t){return t?E(M,{key:Object(p.a)(),value:t,selectedDate:r,withMarkers:c,onCompare:h,onChange:function(){return f(t)}}):E(R,{key:Object(p.a)()})}))))})),N=n("RKiZ"),D=n("Gliw"),U=a.a.createElement;function B(){var t=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 20px;\n"]);return B=function(){return t},t}var z=s.c.div(B()),F=(new Date).getFullYear(),V=function(t){var e=t.lang,n=t.value,r=t.style,i=t.sheets,a=t.className,s=t.canEditYear,h=t.withMarkers,f=t.withNavigate,d=t.withYearDisplay,m=t.onCompare,v=t.onChange,g=l(n),b=Object(o.useState)([]),y=b[0],w=b[1],M=Object(o.useState)(new Date),E=M[0],_=M[1];return Object(o.useEffect)((function(){w(new Array(i||1).fill(null).map((function(t,n){var r=new Date(E),i=new Date(r.getFullYear(),r.getMonth()+n),o=i.getMonth();return{label:i.toLocaleString(e,{month:"long"}),days:u(i.getFullYear(),o)}})))}),[E,i,e]),U(z,{className:a,style:r},s&&U(D.a,{type:"number",name:"year",defaultValue:g&&g.getFullYear()||F,onChange:function(t){return _(new Date(t.target.value,E.getMonth(),E.getDate()))},horizontalAlignment:"center",placeholder:F,appearance:"ghost",min:1920,max:2100,required:!0}),s&&U(N.a,{clear:!0}),y.map((function(t){return U(L,{key:Object(p.a)(),value:g,lang:e,month:t,filterDate:E,setFilterDate:_,withNavigate:!!f,withMarkers:null===h||void 0===h||h,withYearDisplay:null!==d&&void 0!==d?d:1===y.length,onCompare:m||c,onChange:v})})))},q=n("feIE"),H=a.a.createElement;function W(){var t=Object(i.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n"]);return W=function(){return t},t}function G(){var t=Object(i.a)(["\n  position: absolute;\n  top: calc(var(--input-height-m) + 10px);\n  left: 0;\n  z-index: 15;\n  padding: var(--default-gap);\n  background: var(--surface-background);\n  border: var(--surface-border);\n  border-radius: var(--surface-border-radius);\n  box-shadow: var(--default-shadow);\n\n  &.fade-enter {\n    opacity: 0;\n  }\n\n  &.fade-enter-active {\n    opacity: 1;\n    transition: opacity 100ms, blur 100ms;\n  }\n\n  &.fade-exit {\n    opacity: 1;\n  }\n\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 100ms, blur 100ms;\n  }\n"]);return G=function(){return t},t}function Z(){var t=Object(i.a)(["\n  position: relative;\n  flex-grow: 1;\n"]);return Z=function(){return t},t}function $(){var t=Object(i.a)(["\n  position: relative;\n  display: flex;\n  flex-grow: 1;\n"]);return $=function(){return t},t}var K=s.c.div($()),Y=s.c.div(Z()),Q=Object(s.c)(d.a)(G()),X=Object(s.c)(q.a)(W());e.a=function(t){var e=t.id,n=t.name,i=t.style,a=t.sheets,s=t.inputRef,u=t.placeholder,c=t.value,d=void 0===c?null:c,p=t.className,m=t.appearance,v=t.canEditYear,g=t.withNavigate,b=t.withMarkers,y=t.withYearDisplay,w=t.onChange,M=t.onCompare,E=Object(o.useState)(!1),_=E[0],k=E[1],O=Object(o.useState)(l(d)),j=O[0],x=O[1],S=f((function(){return k(!1)})),A=Object(r.a)(S,1)[0];return H(K,{ref:A,className:p,style:i},H(Y,{onClick:function(){k(!_)},className:p,style:i},H(D.a,{id:e,name:n,type:"text",inputRef:null!==s&&void 0!==s?s:null,defaultValue:h(j),placeholder:u||"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",appearance:m,readOnly:!0}),H(X,{icon:"calendar",stroke:"var(--ghost-color-text)"})),H(Q,{in:_,animation:"fade",timeout:100},H(V,{value:j,sheets:a,style:{width:282},canEditYear:v,withNavigate:g,withMarkers:b,withYearDisplay:y,onChange:function(t){x(t),w&&w(t)},onCompare:M})))}},wk3p:function(t){t.exports=JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}')},x7x7:function(t,e,n){"use strict";(function(e){var r=n("lm0R");function i(t){var e=this;this.next=null,this.entry=null,this.finish=function(){!function(t,e,n){var r=t.entry;t.entry=null;for(;r;){var i=r.callback;e.pendingcb--,i(n),r=r.next}e.corkedRequestsFree?e.corkedRequestsFree.next=t:e.corkedRequestsFree=t}(e,t)}}t.exports=v;var o,a=r.nextTick;v.WritableState=m;var s=Object.create(n("Onz0"));s.inherits=n("P7XM");var u={deprecate:n("t9FE")},c=n("LTzE"),l=n("IeKR").Buffer,h=e.Uint8Array||function(){};var f,d=n("LNCm");function p(){}function m(t,e){o=o||n("qDKX"),t=t||{};var s=e instanceof o;this.objectMode=!!t.objectMode,s&&(this.objectMode=this.objectMode||!!t.writableObjectMode);var u=t.highWaterMark,c=t.writableHighWaterMark,l=this.objectMode?16:16384;this.highWaterMark=u||0===u?u:s&&(c||0===c)?c:l,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var h=!1===t.decodeStrings;this.decodeStrings=!h,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var n=t._writableState,i=n.sync,o=n.writecb;if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(n),e)!function(t,e,n,i,o){--e.pendingcb,n?(r.nextTick(o,i),r.nextTick(E,t,e),t._writableState.errorEmitted=!0,t.emit("error",i)):(o(i),t._writableState.errorEmitted=!0,t.emit("error",i),E(t,e))}(t,n,i,e,o);else{var s=w(n);s||n.corked||n.bufferProcessing||!n.bufferedRequest||y(t,n),i?a(b,t,n,s,o):b(t,n,s,o)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new i(this)}function v(t){if(o=o||n("qDKX"),!f.call(v,this)&&!(this instanceof o))return new v(t);this._writableState=new m(t,this),this.writable=!0,t&&("function"===typeof t.write&&(this._write=t.write),"function"===typeof t.writev&&(this._writev=t.writev),"function"===typeof t.destroy&&(this._destroy=t.destroy),"function"===typeof t.final&&(this._final=t.final)),c.call(this)}function g(t,e,n,r,i,o,a){e.writelen=r,e.writecb=a,e.writing=!0,e.sync=!0,n?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function b(t,e,n,r){n||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,r(),E(t,e)}function y(t,e){e.bufferProcessing=!0;var n=e.bufferedRequest;if(t._writev&&n&&n.next){var r=e.bufferedRequestCount,o=new Array(r),a=e.corkedRequestsFree;a.entry=n;for(var s=0,u=!0;n;)o[s]=n,n.isBuf||(u=!1),n=n.next,s+=1;o.allBuffers=u,g(t,e,!0,e.length,o,"",a.finish),e.pendingcb++,e.lastBufferedRequest=null,a.next?(e.corkedRequestsFree=a.next,a.next=null):e.corkedRequestsFree=new i(e),e.bufferedRequestCount=0}else{for(;n;){var c=n.chunk,l=n.encoding,h=n.callback;if(g(t,e,!1,e.objectMode?1:c.length,c,l,h),n=n.next,e.bufferedRequestCount--,e.writing)break}null===n&&(e.lastBufferedRequest=null)}e.bufferedRequest=n,e.bufferProcessing=!1}function w(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function M(t,e){t._final((function(n){e.pendingcb--,n&&t.emit("error",n),e.prefinished=!0,t.emit("prefinish"),E(t,e)}))}function E(t,e){var n=w(e);return n&&(!function(t,e){e.prefinished||e.finalCalled||("function"===typeof t._final?(e.pendingcb++,e.finalCalled=!0,r.nextTick(M,t,e)):(e.prefinished=!0,t.emit("prefinish")))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"))),n}s.inherits(v,c),m.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(m.prototype,"buffer",{get:u.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"===typeof Symbol&&Symbol.hasInstance&&"function"===typeof Function.prototype[Symbol.hasInstance]?(f=Function.prototype[Symbol.hasInstance],Object.defineProperty(v,Symbol.hasInstance,{value:function(t){return!!f.call(this,t)||this===v&&(t&&t._writableState instanceof m)}})):f=function(t){return t instanceof this},v.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},v.prototype.write=function(t,e,n){var i,o=this._writableState,a=!1,s=!o.objectMode&&(i=t,l.isBuffer(i)||i instanceof h);return s&&!l.isBuffer(t)&&(t=function(t){return l.from(t)}(t)),"function"===typeof e&&(n=e,e=null),s?e="buffer":e||(e=o.defaultEncoding),"function"!==typeof n&&(n=p),o.ended?function(t,e){var n=new Error("write after end");t.emit("error",n),r.nextTick(e,n)}(this,n):(s||function(t,e,n,i){var o=!0,a=!1;return null===n?a=new TypeError("May not write null values to stream"):"string"===typeof n||void 0===n||e.objectMode||(a=new TypeError("Invalid non-string/buffer chunk")),a&&(t.emit("error",a),r.nextTick(i,a),o=!1),o}(this,o,t,n))&&(o.pendingcb++,a=function(t,e,n,r,i,o){if(!n){var a=function(t,e,n){t.objectMode||!1===t.decodeStrings||"string"!==typeof e||(e=l.from(e,n));return e}(e,r,i);r!==a&&(n=!0,i="buffer",r=a)}var s=e.objectMode?1:r.length;e.length+=s;var u=e.length<e.highWaterMark;u||(e.needDrain=!0);if(e.writing||e.corked){var c=e.lastBufferedRequest;e.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:o,next:null},c?c.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else g(t,e,!1,s,r,i,o);return u}(this,o,s,t,e,n)),a},v.prototype.cork=function(){this._writableState.corked++},v.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.bufferedRequest||y(this,t))},v.prototype.setDefaultEncoding=function(t){if("string"===typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(v.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),v.prototype._write=function(t,e,n){n(new Error("_write() is not implemented"))},v.prototype._writev=null,v.prototype.end=function(t,e,n){var i=this._writableState;"function"===typeof t?(n=t,t=null,e=null):"function"===typeof e&&(n=e,e=null),null!==t&&void 0!==t&&this.write(t,e),i.corked&&(i.corked=1,this.uncork()),i.ending||i.finished||function(t,e,n){e.ending=!0,E(t,e),n&&(e.finished?r.nextTick(n):t.once("finish",n));e.ended=!0,t.writable=!1}(this,i,n)},Object.defineProperty(v.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),v.prototype.destroy=d.destroy,v.prototype._undestroy=d.undestroy,v.prototype._destroy=function(t,e){this.end(),e(t)}}).call(this,n("ntbh"))},xAqQ:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("nShV"),a=n("ZeZO"),s=n("qoM+"),u=n("2qQv");e.a=({children:t,mutation:e,appearance:n,className:r,onCancel:c,onSubmit:l})=>i.a.createElement(s.b,{className:r,appearance:n,mutation:e,onSubmit:l},(({loading:e,error:n})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{data:t,loading:e,error:n,errorMessage:"\u0423\u043f\u0441! \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442",emptyMessage:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f"},t,i.a.createElement(o.b,null,i.a.createElement(a.a,{type:"button",style:{flexGrow:1},onClick:c},"\u041e\u0442\u043c\u0435\u043d\u0430"),i.a.createElement(a.a,{type:"submit",disabled:e,appearance:"red",style:{flexGrow:1}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))))},xEkU:function(t,e,n){(function(e){for(var r=n("bQgK"),i="undefined"===typeof window?e:window,o=["moz","webkit"],a="AnimationFrame",s=i["request"+a],u=i["cancel"+a]||i["cancelRequest"+a],c=0;!s&&c<o.length;c++)s=i[o[c]+"Request"+a],u=i[o[c]+"Cancel"+a]||i[o[c]+"CancelRequest"+a];if(!s||!u){var l=0,h=0,f=[];s=function(t){if(0===f.length){var e=r(),n=Math.max(0,16.666666666666668-(e-l));l=n+e,setTimeout((function(){var t=f.slice(0);f.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(l)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return f.push({handle:++h,callback:t,cancelled:!1}),h},u=function(t){for(var e=0;e<f.length;e++)f[e].handle===t&&(f[e].cancelled=!0)}}t.exports=function(t){return s.call(i,t)},t.exports.cancel=function(){u.apply(i,arguments)},t.exports.polyfill=function(t){t||(t=i),t.requestAnimationFrame=s,t.cancelAnimationFrame=u}}).call(this,n("ntbh"))},xZGU:function(t,e,n){"use strict";(function(e){var r,i=n("HDXh"),o=i.Buffer,a={};for(r in i)i.hasOwnProperty(r)&&"SlowBuffer"!==r&&"Buffer"!==r&&(a[r]=i[r]);var s=a.Buffer={};for(r in o)o.hasOwnProperty(r)&&"allocUnsafe"!==r&&"allocUnsafeSlow"!==r&&(s[r]=o[r]);if(a.Buffer.prototype=o.prototype,s.from&&s.from!==Uint8Array.from||(s.from=function(t,e,n){if("number"===typeof t)throw new TypeError('The "value" argument must not be of type number. Received type '+typeof t);if(t&&"undefined"===typeof t.length)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);return o(t,e,n)}),s.alloc||(s.alloc=function(t,e,n){if("number"!==typeof t)throw new TypeError('The "size" argument must be of type number. Received type '+typeof t);if(t<0||t>=2*(1<<30))throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=o(t);return e&&0!==e.length?"string"===typeof n?r.fill(e,n):r.fill(e):r.fill(0),r}),!a.kStringMaxLength)try{a.kStringMaxLength=e.binding("buffer").kStringMaxLength}catch(u){}a.constants||(a.constants={MAX_LENGTH:a.kMaxLength},a.kStringMaxLength&&(a.constants.MAX_STRING_LENGTH=a.kStringMaxLength)),t.exports=a}).call(this,n("8oxB"))},xq54:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=n("HDXh").Buffer,s=n(2).inspect,u=s&&s.custom||"inspect";t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}var e,n,c;return e=t,(n=[{key:"push",value:function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length}},{key:"unshift",value:function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length}},{key:"shift",value:function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(t){if(0===this.length)return"";for(var e=this.head,n=""+e.data;e=e.next;)n+=t+e.data;return n}},{key:"concat",value:function(t){if(0===this.length)return a.alloc(0);for(var e,n,r,i=a.allocUnsafe(t>>>0),o=this.head,s=0;o;)e=o.data,n=i,r=s,a.prototype.copy.call(e,n,r),s+=o.data.length,o=o.next;return i}},{key:"consume",value:function(t,e){var n;return t<this.head.data.length?(n=this.head.data.slice(0,t),this.head.data=this.head.data.slice(t)):n=t===this.head.data.length?this.shift():e?this._getString(t):this._getBuffer(t),n}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(t){var e=this.head,n=1,r=e.data;for(t-=r.length;e=e.next;){var i=e.data,o=t>i.length?i.length:t;if(o===i.length?r+=i:r+=i.slice(0,t),0===(t-=o)){o===i.length?(++n,e.next?this.head=e.next:this.head=this.tail=null):(this.head=e,e.data=i.slice(o));break}++n}return this.length-=n,r}},{key:"_getBuffer",value:function(t){var e=a.allocUnsafe(t),n=this.head,r=1;for(n.data.copy(e),t-=n.data.length;n=n.next;){var i=n.data,o=t>i.length?i.length:t;if(i.copy(e,e.length-t,0,o),0===(t-=o)){o===i.length?(++r,n.next?this.head=n.next:this.head=this.tail=null):(this.head=n,n.data=i.slice(o));break}++r}return this.length-=r,e}},{key:u,value:function(t,e){return s(this,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{depth:0,customInspect:!1}))}}])&&o(e.prototype,n),c&&o(e,c),t}()},yEVw:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("vOnD"),a=n("nShV"),s=n("8CDE"),u=n("7sPp"),c=n("QUga"),l=n("V0nP"),h=n("aBfq"),f=n("ZeZO"),d=n("feIE"),p=n("79b8"),m=n("VWQm"),v=n("NWnW"),g=n("8UhZ");const b=Object(o.c)(s.a).withConfig({displayName:"CategoryCard__Wrap",componentId:"sc-10psc0b-0"})(["height:100%;"," "," ",""],(({appearance:t})=>"default"===t&&Object(o.b)(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"])),(({appearance:t})=>"ghost"===t&&Object(o.b)(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"])),(({appearance:t})=>"clear"===t&&Object(o.b)(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]))),y=(Object(o.c)(l.a).withConfig({displayName:"CategoryCard__Poster",componentId:"sc-10psc0b-1"})(["object-fit:cover;width:100%;height:512px;border-radius:var(--surface-border-radius);"]),Object(o.c)(a.b).withConfig({displayName:"CategoryCard__Header",componentId:"sc-10psc0b-2"})(["justify-content:space-between;align-items:center;"])),w=Object(o.c)(a.b).withConfig({displayName:"CategoryCard__Actions",componentId:"sc-10psc0b-3"})(["grid-gap:5px;height:100%;"]),M=Object(o.c)(s.a).withConfig({displayName:"CategoryCard__Content",componentId:"sc-10psc0b-4"})(["grid-gap:0;"]),E=Object(o.c)(u.a).withConfig({displayName:"CategoryCard__Name",componentId:"sc-10psc0b-5"})(["transition:opacity 150ms ease;",""],(({onClick:t})=>t&&Object(o.b)(["cursor:pointer;&:hover{opacity:0.45;}"]))),_=({category:t,appearance:e,className:n,style:r,onLink:o,onChecked:a,onDelete:s,onEdit:u})=>{const{setQuery:l}=Object(g.b)();return i.a.createElement(b,{className:n,style:r,appearance:e},i.a.createElement(M,null,i.a.createElement(y,null,i.a.createElement(h.a,{date:t.createdAt,category:Object(v.d)(t.type)}),a&&u&&s&&i.a.createElement(w,null,i.a.createElement(m.b,{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"},i.a.createElement(f.a,{kind:"icon",size:"xs",appearance:"red",onClick:s},i.a.createElement(d.a,{icon:"delete",size:"xs",stroke:"white"}))),i.a.createElement(m.b,{text:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"},i.a.createElement(f.a,{kind:"icon",size:"xs",onClick:u},i.a.createElement(d.a,{icon:"edit",size:"xs",stroke:"white"}))),i.a.createElement(m.b,{text:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",self:!0},i.a.createElement(p.a,null)))),i.a.createElement(E,{tag:"h4",onClick:()=>l(t.id,"category",o)},t.name),i.a.createElement(c.b,null,t.description)))};_.defaultProps={appearance:"default"},e.a=_},yXmM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.containerStyleDefault={position:"relative",overflow:"hidden",width:"100%",height:"100%"},e.containerStyleAutoHeight={height:"auto"},e.viewStyleDefault={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"scroll",WebkitOverflowScrolling:"touch"},e.viewStyleAutoHeight={position:"relative",top:void 0,left:void 0,right:void 0,bottom:void 0},e.viewStyleUniversalInitial={overflow:"hidden",marginRight:0,marginBottom:0},e.trackHorizontalStyleDefault={position:"absolute",height:6},e.trackVerticalStyleDefault={position:"absolute",width:6},e.thumbHorizontalStyleDefault={position:"relative",display:"block",height:"100%"},e.thumbVerticalStyleDefault={position:"relative",display:"block",width:"100%"},e.disableSelectStyle={userSelect:"none"},e.disableSelectStyleReset={userSelect:""}},ybjB:function(t,e,n){"use strict";var r={};function i(t,e,n){n||(n=Error);var i=function(t){var n,r;function i(n,r,i){return t.call(this,function(t,n,r){return"string"===typeof e?e:e(t,n,r)}(n,r,i))||this}return r=t,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,i}(n);i.prototype.name=n.name,i.prototype.code=t,r[t]=i}function o(t,e){if(Array.isArray(t)){var n=t.length;return t=t.map((function(t){return String(t)})),n>2?"one of ".concat(e," ").concat(t.slice(0,n-1).join(", "),", or ")+t[n-1]:2===n?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(e," ").concat(t[0])}return"of ".concat(e," ").concat(String(t))}i("ERR_INVALID_OPT_VALUE",(function(t,e){return'The value "'+e+'" is invalid for option "'+t+'"'}),TypeError),i("ERR_INVALID_ARG_TYPE",(function(t,e,n){var r,i,a,s;if("string"===typeof e&&(i="not ",e.substr(!a||a<0?0:+a,i.length)===i)?(r="must not be",e=e.replace(/^not /,"")):r="must be",function(t,e,n){return(void 0===n||n>t.length)&&(n=t.length),t.substring(n-e.length,n)===e}(t," argument"))s="The ".concat(t," ").concat(r," ").concat(o(e,"type"));else{var u=function(t,e,n){return"number"!==typeof n&&(n=0),!(n+e.length>t.length)&&-1!==t.indexOf(e,n)}(t,".")?"property":"argument";s='The "'.concat(t,'" ').concat(u," ").concat(r," ").concat(o(e,"type"))}return s+=". Received type ".concat(typeof n)}),TypeError),i("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),i("ERR_METHOD_NOT_IMPLEMENTED",(function(t){return"The "+t+" method is not implemented"})),i("ERR_STREAM_PREMATURE_CLOSE","Premature close"),i("ERR_STREAM_DESTROYED",(function(t){return"Cannot call "+t+" after a stream was destroyed"})),i("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),i("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),i("ERR_STREAM_WRITE_AFTER_END","write after end"),i("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),i("ERR_UNKNOWN_ENCODING",(function(t){return"Unknown encoding: "+t}),TypeError),i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),t.exports.codes=r},"z/Nc":function(t,e){var n={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};t.exports=function(t,e){return"number"!==typeof e||n[t]?e:e+"px"}},z71Z:function(t,e,n){"use strict";const r=n("P7XM"),i=n("vBIh"),o=n("YoN+").DecoderBuffer,a=n("g2Dh"),s=n("i3FT");function u(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new c,this.tree._init(t.body)}function c(t){a.call(this,"der",t)}function l(t,e){let n=t.readUInt8(e);if(t.isError(n))return n;const r=s.tagClass[n>>6],i=0===(32&n);if(31===(31&n)){let r=n;for(n=0;128===(128&r);){if(r=t.readUInt8(e),t.isError(r))return r;n<<=7,n|=127&r}}else n&=31;return{cls:r,primitive:i,tag:n,tagStr:s.tag[n]}}function h(t,e,n){let r=t.readUInt8(n);if(t.isError(r))return r;if(!e&&128===r)return null;if(0===(128&r))return r;const i=127&r;if(i>4)return t.error("length octect is too long");r=0;for(let o=0;o<i;o++){r<<=8;const e=t.readUInt8(n);if(t.isError(e))return e;r|=e}return r}t.exports=u,u.prototype.decode=function(t,e){return o.isDecoderBuffer(t)||(t=new o(t,e)),this.tree._decode(t,e)},r(c,a),c.prototype._peekTag=function(t,e,n){if(t.isEmpty())return!1;const r=t.save(),i=l(t,'Failed to peek tag: "'+e+'"');return t.isError(i)?i:(t.restore(r),i.tag===e||i.tagStr===e||i.tagStr+"of"===e||n)},c.prototype._decodeTag=function(t,e,n){const r=l(t,'Failed to decode tag of "'+e+'"');if(t.isError(r))return r;let i=h(t,r.primitive,'Failed to get length of "'+e+'"');if(t.isError(i))return i;if(!n&&r.tag!==e&&r.tagStr!==e&&r.tagStr+"of"!==e)return t.error('Failed to match tag: "'+e+'"');if(r.primitive||null!==i)return t.skip(i,'Failed to match body of: "'+e+'"');const o=t.save(),a=this._skipUntilEnd(t,'Failed to skip indefinite length body: "'+this.tag+'"');return t.isError(a)?a:(i=t.offset-o.offset,t.restore(o),t.skip(i,'Failed to match body of: "'+e+'"'))},c.prototype._skipUntilEnd=function(t,e){for(;;){const n=l(t,e);if(t.isError(n))return n;const r=h(t,n.primitive,e);if(t.isError(r))return r;let i;if(i=n.primitive||null!==r?t.skip(r):this._skipUntilEnd(t,e),t.isError(i))return i;if("end"===n.tagStr)break}},c.prototype._decodeList=function(t,e,n,r){const i=[];for(;!t.isEmpty();){const e=this._peekTag(t,"end");if(t.isError(e))return e;const o=n.decode(t,"der",r);if(t.isError(o)&&e)break;i.push(o)}return i},c.prototype._decodeStr=function(t,e){if("bitstr"===e){const e=t.readUInt8();return t.isError(e)?e:{unused:e,data:t.raw()}}if("bmpstr"===e){const e=t.raw();if(e.length%2===1)return t.error("Decoding of string type: bmpstr length mismatch");let n="";for(let t=0;t<e.length/2;t++)n+=String.fromCharCode(e.readUInt16BE(2*t));return n}if("numstr"===e){const e=t.raw().toString("ascii");return this._isNumstr(e)?e:t.error("Decoding of string type: numstr unsupported characters")}if("octstr"===e)return t.raw();if("objDesc"===e)return t.raw();if("printstr"===e){const e=t.raw().toString("ascii");return this._isPrintstr(e)?e:t.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(e)?t.raw().toString():t.error("Decoding of string type: "+e+" unsupported")},c.prototype._decodeObjid=function(t,e,n){let r;const i=[];let o=0,a=0;for(;!t.isEmpty();)a=t.readUInt8(),o<<=7,o|=127&a,0===(128&a)&&(i.push(o),o=0);128&a&&i.push(o);const s=i[0]/40|0,u=i[0]%40;if(r=n?i:[s,u].concat(i.slice(1)),e){let t=e[r.join(" ")];void 0===t&&(t=e[r.join(".")]),void 0!==t&&(r=t)}return r},c.prototype._decodeTime=function(t,e){const n=t.raw().toString();let r,i,o,a,s,u;if("gentime"===e)r=0|n.slice(0,4),i=0|n.slice(4,6),o=0|n.slice(6,8),a=0|n.slice(8,10),s=0|n.slice(10,12),u=0|n.slice(12,14);else{if("utctime"!==e)return t.error("Decoding "+e+" time is not supported yet");r=0|n.slice(0,2),i=0|n.slice(2,4),o=0|n.slice(4,6),a=0|n.slice(6,8),s=0|n.slice(8,10),u=0|n.slice(10,12),r=r<70?2e3+r:1900+r}return Date.UTC(r,i-1,o,a,s,u,0)},c.prototype._decodeNull=function(){return null},c.prototype._decodeBool=function(t){const e=t.readUInt8();return t.isError(e)?e:0!==e},c.prototype._decodeInt=function(t,e){const n=t.raw();let r=new i(n);return e&&(r=e[r.toString(10)]||r),r},c.prototype._use=function(t,e){return"function"===typeof t&&(t=t(e)),t._getDecoder("der").tree}},zZGF:function(t){t.exports=JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')}}]);