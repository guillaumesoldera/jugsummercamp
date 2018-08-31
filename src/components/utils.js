/**
 * <div { ...className({ active: true }) }></div>
 */
export function className(obj) {
    const className = classSet(obj);
    return className ? { className } : { };
  }

/**
 * <div className={classSet({ active: true })}></div>
 */
export function classSet(obj) {
  return Object.keys(obj).filter(k => obj[k]).join(' ');
}

export function chunk(size, list) {
  return list.reduce((acc, curr, i, self) => {
    if ( !(i % size)  ) {  
      return [
          ...acc,
          self.slice(i, i + size),
        ];
    }
    return acc;
  }, []);
}
