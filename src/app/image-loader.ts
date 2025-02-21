export default function customImageLoader({ src }: { src: string }) {
  if (src.startsWith("http")) {
    return src;
  }
  return `/my-site${src}`;
}
