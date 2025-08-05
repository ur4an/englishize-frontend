import bookFirstWords from "@/assets/book-first-words.jpg";
import bookGrammar from "@/assets/book-grammar.jpg";
import bookReading from "@/assets/book-reading.jpg";
import bookVocabulary from "@/assets/book-vocabulary.jpg";
import { Button } from "@/components/ui/button";
import { Star, Download, Play } from "lucide-react";

const Books = () => {
  const books = [
    {
      title: "My First English Words",
      image: bookFirstWords,
      description:
        "Perfect for beginners learning basic English vocabulary with colorful illustrations.",
      level: "Beginner",
      rating: 5,
      lessons: 20,
    },
    {
      title: "Fun English Grammar",
      image: bookGrammar,
      description:
        "Make grammar fun with interactive exercises and engaging cartoon characters.",
      level: "Intermediate",
      rating: 5,
      lessons: 25,
    },
    {
      title: "Reading Adventures",
      image: bookReading,
      description:
        "Exciting stories that improve reading comprehension and vocabulary building.",
      level: "Intermediate",
      rating: 4,
      lessons: 30,
    },
    {
      title: "Picture Dictionary",
      image: bookVocabulary,
      description:
        "Visual learning with pictures and words for everyday vocabulary expansion.",
      level: "All Levels",
      rating: 5,
      lessons: 40,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-accent fill-accent" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Learning
            <span className="text-secondary"> Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of interactive books and learning materials
            designed specifically for young English learners at every level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              {/* Book Cover */}
              <div className="relative overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {book.level}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {book.title}
                </h3>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(book.rating)}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({book.rating}.0)
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {book.description}
                </p>

                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <span>{book.lessons} Lessons</span>
                  <span>Interactive</span>
                </div>

                <Button
                  className="w-full bg-gradient-secondary hover:opacity-90 transition-all duration-300"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Access Book
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 shadow-button transition-all duration-300 hover:scale-105"
          >
            View All Learning Materials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Books;
