import { comments } from "./data";

export async function GET() {
    return Response.json(comments);
}

export async function POST(request: Request) {    
    const comment = await request.json();
    const newcomment = {
        id: comments.length +1,
        description: comment.description,
        date: comment.date,
        authorName: comment.authorName,
        authorRole: comment.authorRole, 
        authorImage: {src:"/guess.jpg", alt:"guess", width: 100, height: 100 },
    };
    comments.push(newcomment);
    return new Response (JSON.stringify(newcomment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}
