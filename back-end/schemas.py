from typing import List, Union, Optional

from pydantic import BaseModel


class ItemBase(BaseModel):
    title: str
    description: Union[str, None] = None


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str
    github_user: Optional[str]=""


class User(UserBase):
    id: int
    is_active: bool
    github_user: Optional[str]=""
    github_user: Optional[str]=""
    items: List[Item] = []

    class Config:
        orm_mode = True

class UserInDB(User):
    hashed_password: str

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Union[str, None] = None