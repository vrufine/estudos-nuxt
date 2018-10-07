export default async function (context) {
  const usuarioLogado = context.store.getters.obterUsuarioLogado
  if (!usuarioLogado) {
    return context.res.redirect('/login')
  }
}
