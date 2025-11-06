-- Create the 'user' table
CREATE TABLE public.user (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    password TEXT NOT NULL
);
