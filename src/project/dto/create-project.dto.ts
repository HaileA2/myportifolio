import { IsString, IsUrl, IsOptional, IsArray, ArrayNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ example: 'My Portfolio Website', description: 'Title of the project' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'A personal portfolio website built with Next.js and Tailwind CSS.' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'https://github.com/HaileA2/myportifolio' })
  @IsUrl()
  githubUrl: string;

  @ApiPropertyOptional({ example: 'https://myportfolio.haile.com', description: 'Live demo link (if any)' })
  @IsUrl()
  @IsOptional()
  liveUrl?: string;

  @ApiPropertyOptional({
    example: ['Next.js', 'NestJS', 'MongoDB'],
    description: 'Technologies used in the project',
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  technologies?: string[];

  @ApiPropertyOptional({
    example: ['https://cloudinary.com/image1.jpg'],
    description: 'Screenshot URLs or image links',
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];
}
