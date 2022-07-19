import { z } from 'zod';

export type Props<T> = {
  data: T
};

export const pictureValidator = z.object({
  asset: z.object({
    _ref: z.string(),
  }),
});

export const testimonyValidator = z.array(
  z.object({
    name: z.string(),
    comment: z.string(),
    picture: pictureValidator,
  }),
);
export type Testimony = z.infer<typeof testimonyValidator>;

export const missionValidator = z.array(
  z.object({
    name: z.string(),
    phrase: z.string(),
    picture: pictureValidator,
  }),
);
export type Mission = z.infer<typeof missionValidator>;