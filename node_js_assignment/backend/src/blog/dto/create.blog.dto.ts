export interface CreateBlogDto {
  title: string;
  body: string;
  tags: string;
  date_time: string;
  creator_id: string;
  likes: number;
  disLikes: number;
}
