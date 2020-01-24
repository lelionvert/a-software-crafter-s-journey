<template>
    <section class="section has-background-light">
        <div class="container">

            <div class="columns">
                <div class="column is-one-third">
                    <h1 class="title">{{ lastArticlesTitle }}</h1>
                </div>
                <div class="column is-offset-one-third">
                    <div class="field has-addons">
                        <div class="control has-icons-left">
                            <input class="input" type="text" placeholder="Search..." v-model="searchInput">
                            <span class="icon is-small is-left">
                                <i class="fas fa-search"/>
                            </span>
                        </div>
                        <div class="control">
                            <button class="button" v-on:click="clearSearch()">
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="columns is-centered" v-for="(article, i) in filteredList" :key="i" v-if="i % 2 == 0">
                <div class="column">
                    <Article :article="article"/>
                </div>
                <div class="column" v-if="filteredList[i+1]">
                    <Article :article="filteredList[i+1]"/>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import Article from '~/components/articleCard.vue'

    export default {
        props: ['articles'],
        components: {
            Article
        },
        data() {
            return {
                searchInput: "",
                lastArticlesTitle: 'Derniers articles'
            }
        },
        methods: {
            clearSearch : function() {
                this.searchInput = "";
            }
        },
        computed: {
            filteredList() {
                return this.articles.filter(article => {
                    return article.title.toLowerCase().includes(this.searchInput.toLowerCase())
                })
            }
        }
    }
</script>
