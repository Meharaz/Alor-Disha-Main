import React from 'react';
import blog1 from "./image/blog1.jpg";
import blog2 from "./image/blog2.jpg";

const blogPosts = [
  {
    title: 'ইসলামে নারীর সমতা ও ন্যায়বিচার',
    image: blog1,
    categories: ['Islamic Identity', 'Knowledge'],
    date: 'July 21, 2017',
    commentsCount: 2,
    excerpt: 'ইসলাম একটি পূর্ণাঙ্গ জীবনব্যবস্থা যা ন্যায়, মর্যাদা এবং মানবতার সম্মান রক্ষাকে অগ্রাধিকার দেয়। বর্তমান সমাজে নারীর অধিকার ও সমতা নিয়ে ব্যাপক আলোচনা হয়, এবং অনেকে মনে করেন ইসলাম নারীর প্রতি বৈষম্যমূলক আচরণ করে। কিন্তু প্রকৃতপক্ষে কুরআন ও হাদীস অধ্যয়ন করলে দেখা যায়, ইসলাম নারী ও পুরুষ উভয়ের জন্যই সমান মর্যাদা, অধিকার এবং সুযোগ প্রদান করেছে।'
  },
  {
    title: 'ইসলাম ও স্বাধীনতা: একটি পূর্ণাঙ্গ দৃষ্টিভঙ্গি',
    image: blog2,
    categories: ['Islamic Identity', 'Knowledge', 'Soul Purification'],
    date: 'July 21, 2017',
    commentsCount: 0,
    excerpt: 'ইসলাম এমন একটি জীবনব্যবস্থা যা মানুষের ব্যক্তিগত, সামাজিক ও আত্মিক স্বাধীনতা নিশ্চিত করে। অনেকেই ভুল ধারণা পোষণ করেন যে ইসলাম কঠোর নিয়ম-কানুনের মাধ্যমে মানুষের স্বাধীনতা হরণ করে। কিন্তু প্রকৃত সত্য হলো — ইসলাম মানুষকে নিয়ন্ত্রিত ও কল্যাণকর স্বাধীনতা প্রদান করে, যা তাকে দাসত্ব, নির্যাতন, এবং অন্যায়ের কবল থেকে মুক্ত রাখে।',
  },
];

const BlogSidebar = () => (
  <aside className="w-full md:w-1/3 px-4 mt-10 md:mt-0">
    <div className="mb-6">
      <h3 className="font-bold text-lg border-b pb-2 mb-4">Categories</h3>
      <ul className="space-y-1 text-sm">
        {['Family Life', 'Grace', 'Important', 'Islamic Identity', 'Knowledge', 'Marriage Advice', 'Soul Purification', 'Special Months & Times', 'Uncategorized'].map((cat, i) => (
          <li key={i}>{cat}</li>
        ))}
      </ul>
    </div>
    <div className="mb-6">
      <h3 className="font-bold text-lg border-b pb-2 mb-4">Search</h3>
      <input type="text" placeholder="Search ..." className="w-full p-2 border rounded" />
    </div>
    <div className="mb-6">
      <h3 className="font-bold text-lg border-b pb-2 mb-4">Recent Posts</h3>
      {blogPosts.map((post, i) => (
        <div key={i} className="flex items-start mb-2">
          <img src={post.image} alt={post.title} className="w-12 h-12 object-cover mr-3" />
          <div className="text-sm">
            <p className="font-semibold">{post.title}</p>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
    <div>
      <h3 className="font-bold text-lg border-b pb-2 mb-4">Comments</h3>
      <ul className="text-sm space-y-1">
        <li><strong>Adam Brown</strong> on 12 Rights of a Muslim Wife</li>
        <li><strong>Philip James</strong> on Gender Equality and Justice in Islam</li>
      </ul>
    </div>
  </aside>
);

const BlogPost = ({ post }) => (
  <div className="mb-12">
    <img src={post.image} alt={post.title} className="w-full h-auto mb-4 rounded" />
    <h2 className="text-2xl font-bold mb-1">{post.title.toUpperCase()}</h2>
    <p className="text-sm text-gray-500 mb-2">
      {post.categories.join(', ')} | {post.date} | {post.commentsCount} Comments
    </p>
    <p className="text-sm mb-4">{post.excerpt}</p>
    <button className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm px-4 py-2 rounded">Read more</button>
  </div>
);

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3">
        {blogPosts.map((post, i) => <BlogPost key={i} post={post} />)}
      </div>
      <BlogSidebar />
    </div>
  );
}