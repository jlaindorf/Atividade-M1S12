<template>
 
    <h1>Produtos</h1>
  
    
    <div class="list-products">
      <v-card width="30%" class="pa-2 mb-2" v-for="product in produtosRestantes" :key="product.id">
        <v-img
          :src="product.imagem"
          class="align-end"
          width="300px"
          hidden="200px"
          cover
          
        >
          <v-card-title class="text-white">{{ product.nome }} </v-card-title>
        </v-img>
        <v-card-subtitle class="pt-4">
          10X de
          {{
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              product.parcela
            )
          }}
        </v-card-subtitle>
  
        <v-card-actions>
          <v-btn color="orange" @click="() => this.$store.dispatch('adicionarProduto', { product })">
            Comprar
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        products: []
      }
    },
    computed: {
      produtosRestantes() {
       
        return this.products.filter((product) => {
          const itemExiste = this.$store.state.produtosCarrinho.find((item) => item.id === product.id)
          if (itemExiste) return false
          return true
        })
      }
    },
    mounted() {
      this.loadProducts()
    },
    methods: {
      loadProducts() {
        axios({
          url: 'http://localhost:3000/produtos',
          method: 'GET'
        })
          .then((response) => {
            this.products = response.data
          })
          .catch(() => {
            alert('Desculpe, não foi possivel recuperar os produtos')
          })
      }
    }
  }
  </script>
  
  <style scoped>
  .list-products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
  }
  </style>