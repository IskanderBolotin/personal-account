import { isDefinedString } from "@/src/shared/libs";
import { SearchInput } from "@/src/shared/ui";
import { useRouter } from "next/router";
import { useState } from "react";

const Search: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string | undefined>(
    isDefinedString(router?.query?.q) ? router.query.q : undefined,
  );

  const searchHandler = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const changeHandler = (value?: string) => {
    setSearch(value);
  };

  return <SearchInput value={search} onChange={changeHandler} onSearh={searchHandler} />;
};

export { Search };
