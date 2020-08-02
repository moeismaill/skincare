/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Skincare`,
    author: {
      name: `Joe Bloggs`,
    },
    description: `Woo is a clean, modern, landing page site template.`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      // `pricing`,
      `call-to-action`,
      `screenshots`,
      `testimonials`,
      `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'features', label: 'About'},
      // {path: 'pricing', label: 'Pricing'},
      {path: 'screenshots', label: 'Services'},
      {path: 'testimonials', label: 'Testimonials'},
      {path: 'subscribe', label: 'Subscribe'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Facebook`,
        url : `https://facebook.com/`,
        fa: `facebook` },
      { service: `Twitter`,
        url : `https://twitter.com/`,
        fa: `twitter` },
      { service: `Instagram`,
        url : `https://instagram.com/`,
        fa: `instagram` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/logo.png`,
      text: `Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `1600 Lake Shore Drive`,
      line2: `Chicago, IL`,
      line3: `60611 US`,
    },
    contacts: [
      { text: `647.343.8234`, url: `tel:3123438234` },
      { text: `123.456.7890`, url: `tel:1234567890`},
      { text: `someone@help.com`, url: `mailto:someone@help.com`},
    ],
  },
  plugins: [ `gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy` ],
}
