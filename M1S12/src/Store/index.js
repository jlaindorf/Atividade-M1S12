import {createStore} from 'vuex'

const store = createStore({
    state() {
        return{
            teste:'olá mundo',
            produtosCarrinho:[]
        }
    },
    mutations:{
            alterarTeste(state, value){
                state.teste = value


            }

    },

    actions:{
        alterarNome(context , value){
            console.log (value.nome)
            console.log("entrei no alterar nome")
            context.commit("Alterar teste", value.nome)
        },

        adicionarProduto(){

            console.log('Entrei no adicionar Produto')
        }
    }
})

export default store