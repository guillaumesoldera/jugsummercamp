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