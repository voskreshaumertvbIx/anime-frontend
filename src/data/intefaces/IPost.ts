export interface IPost {
  post_id: number
  link_href: string
  link_text: string
  image: string
  title: string
  text: string
  anime: IAnime
}

export interface IAnime {
  anime_id: number
  englishTitle: string
  description: string
  episodesCurrent: number
  episodesTotal: number
  rating: number
  imagePath: string
  tags: ITag[]
  releaseYear: number
}

export interface ITag {
  tag_id: number
  name: string
}
