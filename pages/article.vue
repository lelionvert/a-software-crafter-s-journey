<template>
        <section v-if="article" class="section has-background-light">
            <div class="container is-widescreen">

                <nuxt-link to="/" class="button is-danger is-light is-hidden-touch">{{ goBackLabel }}</nuxt-link>

                <h1 class="title has-text-centered">{{ article.title }}</h1>

                <p class="subtitle is-6 has-text-centered">
                    <small>
                        {{ publishedByLabel }} {{ article.author }}
                        -
                        <time :datetime="article.published_date">{{ article.published_date }}</time>
                    </small>
                </p>

                <div class="box">
                    <article class="media">
                        <div class="media-content">
                            <client-only>
                                <div class="content">
                                    <nav class="level is-mobile">
                                        <div class="level-left">
                                            <Tags :article="article" />
                                        </div>
                                        <div class="level-right">
                                            <TwitterShareLink :article="article" />
                                        </div>
                                    </nav>

                                    <p>
                                        {{ article.description }}
                                    </p>

                                    <hr class="divider" />

                                    <div v-html="article.content" class="has-text-justified"></div>
                                </div>

                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <Tags :article="article" />
                                    </div>
                                    <div class="level-right">
                                        <TwitterShareLink :article="article" />
                                    </div>
                                </nav>
                            </client-only>
                        </div>
                    </article>
                </div>

            </div>
        </section>

        <section v-else class="hero is-large has-background-light">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        404
                    </h1>
                    <h2 class="subtitle">
                        Oups, l'article demand&eacute; n'existe pas !
                    </h2>
                    <h3>
                        <nuxt-link to="/">
                            Retour &agrave; l'accueil
                        </nuxt-link>
                    </h3>
                </div>
            </div>
        </section>
</template>

<script>
    import TwitterShareLink from '~/components/twitterShareLink.vue'
    import Tags from '~/components/tags.vue'

    export default {
        components: {
            TwitterShareLink,
            Tags
        },
        async asyncData({ route }) {
            try {
                const fileName = `${ route.path }.md`;
                const fileContent = await import(`~/articles${fileName}`);

                return {
                    article: {
                        title: fileContent.attributes.title,
                        author: fileContent.attributes.author,
                        published_date: fileContent.attributes.published_date,
                        description: fileContent.attributes.description,
                        tags: fileContent.attributes.tags.split(','),
                        file_name: fileName,
                        content: fileContent.html,
                        route: route.path
                    }
                };
            } catch (err) {
                return {
                    article: null
                };
            }
        },
        data () {
            return {
                goBackLabel: 'Retour aux articles',
                publishedByLabel: 'par '
            }
        },
        head () {
            return {
                title: `${ this.article ? this.article.title : 'Erreur 404' } - A Software Crafter's Journey`,
            }
        }
    }
</script>
