const config = {
  salt: 10,
  secret: 'Bearer',
  port: 3000,
  'video-id': 'lV6dOFeHwqY',
  'upload-dir': 'uploads',
  'host-url': 'http://atomic.ru.com',
  'local-url': 'http://localhost:3000',
  'server-host-url': 'http://api.atomic.ru.com',
  'server-local-url': 'http://localhost:5000',
  'mongo-db-url':
    'mongodb+srv://admin:xnCXyzVApMpHo6ee@cluster0.yjaue.mongodb.net/app?retryWrites=true&w=majority',
  'google-client-id': '1008300307671-dvv5no8uimgk2lodr76m9rnnva8g0lii.apps.googleusercontent.com',
  'google-client-secret': '5frE-oJIGm06KLUjcx3VcL9s',
  'facebook-app-id': 317441829678268,
  'facebook-app-secret': '3644f9d87f5a169d8196bc070b4fb146',
  'tiny-key': '9vduzd1el74h2sf5a5744o3rnwmzmtsio2vbyjlrqlisy5u3'
}

export default {
  get: (key) => config[key]
}
