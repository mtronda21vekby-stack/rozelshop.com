import { IsArray, IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpsertProductDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  slug!: string;

  @IsString()
  titleRu!: string;

  @IsString()
  titleEn!: string;

  @IsString()
  collectionRu!: string;

  @IsString()
  collectionEn!: string;

  @IsString()
  price!: string;

  @IsString()
  badgeRu!: string;

  @IsString()
  badgeEn!: string;

  @IsString()
  subtitleRu!: string;

  @IsString()
  subtitleEn!: string;

  @IsString()
  descriptionRu!: string;

  @IsString()
  descriptionEn!: string;

  @IsOptional()
  @IsString()
  coverImage?: string;

  @IsOptional()
  @IsArray()
  gallery?: string[];

  @IsIn(['DRAFT', 'PUBLISHED'])
  status!: 'DRAFT' | 'PUBLISHED';

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}
