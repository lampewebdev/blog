import React from 'react'
import Helmet from 'react-helmet'

function Metatags (props) {
  return (
    <Helmet
      title={props.title}
      meta={[
        { name: 'title', content: props.title },
        { name: 'description', content: props.description },
        {
          property: 'og:title',
          content: props.title,
        },
        {
          property: 'og:url',
          content: props.pathname ? props.url + props.pathname : props.url,
        },
        {
          property: 'og:image',
          content: props.thumbnail && props.thumbnail,
        },
        {
          property: 'og:image:secure_url',
          content: props.thumbnail && props.thumbnail,
        },
        {
          property: 'og:description',
          content: props.description,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:locale',
          content: 'en',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: props.title },
        {
          name: 'twitter:description',
          content: props.description,
        },
        {
          name: 'twitter:image',
          content: props.thumbnail && props.thumbnail,
        },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },
        { name: 'twitter:creator', content: '@lampewebdev' },
        { property: 'og:site_name', content: 'https://lampewebdev.github.io/' },
      ]}
    >
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      <script>
        {(adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: 'ca-pub-5940437378624677',
          enable_page_level_ads: true
        })};
      </script>
      <html lang="en" />
    </Helmet>
  )
}

export default Metatags
