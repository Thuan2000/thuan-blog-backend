/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import BooksController from '../../controllers/books.controller';

export const Mutation = {
  mockMutationOne: () => BooksController.getMockBook(),
  mockMutationTwo: () => BooksController.getMockBook()
};

export const Query = {
  mockQueryOne: () => BooksController.getMockBook(),
  mockQueryTwo: () => BooksController.getMockBook()
};
