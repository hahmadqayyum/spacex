import gql from 'graphql-tag'


export const LAUNCH_QUERY = gql`
query Launches {
    launches {
      mission_name
      details
      mission_id
      flight_number
      launch_site {
        site_name
      }
      launch_success
      upcoming
      rocket {
        rocket_name
      }
      links {
        flickr_images
        video_link
      }
    }
  }
`