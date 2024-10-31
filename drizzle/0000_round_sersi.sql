CREATE TABLE IF NOT EXISTS "links" (
	"slug" uuid PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"title" text NOT NULL
);
