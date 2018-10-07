export default function ({ store, redirect }) {
  const { usuario } = store.state.usuarioLogado
  if (!usuario) {
    return redirect('/login')
  }
  return Promise.resolve()
}
