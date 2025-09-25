// components/CoreJavaBlog.jsx

import React from 'react';

const Blog7 = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">
        Core Java Concepts Every Developer Should Master
      </h1>

      <img
        src="/assets/blogs/jav21.webp"
        alt="Core Java Concepts"
        className="w-full h-auto rounded-xl shadow-md mb-6"
      />

      <p className="mb-4 text-lg leading-relaxed">
        Java is one of the most popular and widely used programming languages in the world. Its platform
        independence, strong memory management, and vast ecosystem have made it the backbone of countless
        enterprise applications. Whether you're a beginner or looking to strengthen your backend skills,
        mastering core Java concepts is essential for building robust and scalable software solutions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Object-Oriented Programming (OOP)</h2>
      <p className="mb-4">
        Java is an object-oriented language, which means everything revolves around classes and objects. Core
        OOP principles include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Encapsulation</strong>: Wrapping data and code into a single unit.</li>
        <li><strong>Inheritance</strong>: Acquiring properties from parent classes.</li>
        <li><strong>Polymorphism</strong>: One interface, many implementations.</li>
        <li><strong>Abstraction</strong>: Hiding implementation details and showing only functionality.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Data Types and Variables</h2>
      <p className="mb-4">
        Java offers primitive types like `int`, `char`, `boolean`, and `double`, along with non-primitive types
        like Strings and arrays. Understanding the difference between value types and reference types is crucial.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Control Flow Statements</h2>
      <p className="mb-4">
        Java uses common control flow structures such as `if`, `switch`, `for`, `while`, and `do-while`. These
        enable conditional logic and loops that form the foundation of any program.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Classes and Objects</h2>
      <p className="mb-4">
        A class is a blueprint, and objects are the real-world instances of that class. Understanding how to
        create constructors, use access modifiers, and manage object creation is fundamental to Java programming.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Inheritance and Interfaces</h2>
      <p className="mb-4">
        Java supports single inheritance through classes and multiple inheritance through interfaces. Interfaces
        define what a class must do, not how it does it. Abstract classes and interfaces play a key role in
        design patterns and abstraction.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Exception Handling</h2>
      <p className="mb-4">
        Proper exception handling improves program reliability. Learn how to use `try`, `catch`, `finally`,
        `throw`, and `throws` effectively to handle unexpected conditions and errors gracefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">7. Collections Framework</h2>
      <p className="mb-4">
        Java Collections provide data structures like `List`, `Set`, `Map`, and `Queue`. These are part of
        `java.util` and help manage and manipulate groups of objects with ease.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>ArrayList</strong> – dynamic arrays</li>
        <li><strong>HashSet</strong> – unordered, unique elements</li>
        <li><strong>HashMap</strong> – key-value pairs</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">8. Multithreading</h2>
      <p className="mb-4">
        Java supports multithreading via the `Thread` class and `Runnable` interface. Understanding thread
        lifecycle, synchronization, and concurrent API (like `ExecutorService`) helps in building high-performance apps.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">9. Java Memory Management</h2>
      <p className="mb-4">
        Java handles memory automatically through its Garbage Collector. Still, developers must understand the
        heap, stack, JVM architecture, and memory leaks for optimal performance.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">10. Java I/O and Streams</h2>
      <p className="mb-4">
        Java provides APIs for file handling and data streams. The newer Stream API (Java 8+) allows processing
        collections with functional-style operations like `map`, `filter`, and `collect`.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
      <p className="mb-4">
        Mastering these core Java concepts gives you a strong foundation to dive into frameworks like Spring,
        Hibernate, or Android development. Whether you're preparing for interviews or building complex systems,
        having a firm grip on these basics is critical for any Java developer.
      </p>

      <p className="mt-6 text-lg font-medium">
        Keep coding, keep learning — Java has a lot to offer!
      </p>
    </section>
  );
};

export default Blog7;
