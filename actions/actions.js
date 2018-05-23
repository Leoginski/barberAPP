export const LOGIN = "LOGIN";
export const LISTAR_BARBEIROS = "LISTAR_BARBEIRO";
export const CADASTRAR_BARBEIRO = "CADASTRAR_BARBEIRO";

export function login(state) {
  return { type: LOGIN, state }
}
​
export function listarBarbeiros() {
  return { type: LISTAR_BARBEIROS }
}

export function cadastrarBarbeiro(state) {
  return { type: CADASTRAR_BARBEIRO, state }
}
