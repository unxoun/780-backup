// line 24
interface Props {
  sections: {
    id: string;
    title: string;
    uiControl: string;
    items: {
      title: string;
      value: number;
    }[];
  }[];


// line 121
      {sections.map(section => {
        switch (section.id) {
          case 'price':
            return (
              <section
                title={section.title}
                className={cn(styles['filter__price'], 'mx-2')}
              >
                <PriceRange
                  data={
                    filters.price
                      ? [filters.price?.min, filters.price?.max]
                      : undefined
                  }
                  handleFilter={handleUpdate}
                  // minMax={priceLimit}
                  minMax={{
                    min: section.items[0].value,
                    max: section.items[1].value,
                  }}
                />
              </section>
            );
          default:
            return;
        }
      })}
